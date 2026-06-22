import { useState, useRef } from 'react';
import { defaultCVData } from './data';
import CVPreview from './components/CVPreview';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function App() {
  const [data] = useState(defaultCVData);
  const printRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    if (!printRef.current) return;
    setIsDownloading(true);
    try {
      const element = printRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Failed to generate PDF', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans text-gray-900 flex flex-col">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between w-full mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1 text-gray-900">Sarom Thavireak</h1>
          <p className="text-gray-600">Personal Curriculum Vitae</p>
        </div>
        <button
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 shadow-sm"
        >
          <Download size={20} />
          {isDownloading ? 'Generating PDF...' : 'Download CV'}
        </button>
      </div>

      <div className="flex justify-center max-w-4xl mx-auto w-full flex-1">
        <div className="flex justify-center bg-gray-200/60 p-4 md:p-8 rounded-xl overflow-x-auto border border-gray-300 shadow-inner w-full max-h-[800px] overflow-y-auto">
            <div 
              ref={printRef}
              className="bg-white shadow-xl shrink-0"
              style={{ width: '794px', minHeight: '1123px' }}
            >
              <CVPreview data={data} />
            </div>
        </div>
      </div>
    </div>
  );
}
