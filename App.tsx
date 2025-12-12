import React from 'react';
import { Printer } from 'lucide-react';
import { PAPER_CONTENT } from './constants';
import { PaperHeader } from './components/PaperHeader';
import { PaperSection } from './components/PaperSection';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-0 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      {/* Action Toolbar - Hidden during print */}
      <div className="no-print fixed top-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 font-sans font-semibold border border-blue-700"
          title="Print to PDF"
        >
          <Printer size={20} />
          <span>Save as PDF</span>
        </button>
      </div>

      <div className="no-print mb-8 text-center">
         <h1 className="text-xl font-sans text-slate-600 mb-2 font-bold">IEEE Format Previewer</h1>
         <p className="text-sm font-sans text-slate-500">Click "Save as PDF" to generate the final document.</p>
      </div>

      {/* Main Paper Container */}
      <div 
        className="max-w-[210mm] mx-auto bg-white shadow-2xl p-[20mm] min-h-[297mm] text-gray-900 relative print:shadow-none print:p-0 print:max-w-none print:w-full"
      >
        {/* Header Section (Full Width) */}
        <div className="mb-8">
          <PaperHeader 
            title={PAPER_CONTENT.title}
            subtitle={PAPER_CONTENT.subtitle}
            authors={PAPER_CONTENT.authors}
          />

          {/* Abstract & Keywords */}
          <div className="mt-8 mb-6">
            <div className="mb-3">
              <h1 className="font-bold text-center text-[22px] text-lg mb-3">Abstract</h1>
              <span className="text-justify text-[14px] leading-normal font-bold">{PAPER_CONTENT.abstract}
              </span>
            </div>
            <div>
              <span className="font-bold italic text-[13px]">Keywords—</span>
              <span className="italic text-[13px] font-bold">
                {PAPER_CONTENT.keywords.join(", ")}.
              </span>
            </div>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="columns-1 md:columns-2 gap-[0.8cm] [column-fill:balance] print:block print:columns-2 print-columns text-[13px] leading-normal">
          {PAPER_CONTENT.sections.map((section, index) => (
            <PaperSection key={index} section={section} />
          ))}

          {/* References Section */}
          <div className="break-inside-avoid-column print-break-inside-avoid mt-6">
            <h3 className="font-bold text-[13px] uppercase text-center mb-3 mt-4 tracking-wider text-black">
              REFERENCES
            </h3>
            <div className="space-y-1">
              {PAPER_CONTENT.references.map((ref, idx) => (
                <div key={idx} className="flex gap-2 text-[12px] leading-snug">
                  <span className="min-w-[18px]">{ref.id}</span>
                  <span className="text-justify">{ref.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer/Watermark visual for screen only */}
        <div className="no-print mt-12 pt-8 border-t border-dashed border-gray-300 text-center text-xs text-gray-400 font-sans">
          IEEE Format Preview - Biologic Attendance System
        </div>
      </div>
    </div>
  );
};

export default App;