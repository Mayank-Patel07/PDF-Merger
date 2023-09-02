const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const merger_pdf = async (f1, f2) => {
    await merger.add(f1);  //merge all pages. parameter is the path to file and filename.
    await merger.add(f2); // merge only page 2
    let d = new Date().getTime()
    await merger.save(`public/${d}.pdf`);
    return d
    // Export the merged PDF as a nodejs Buffer
    // const mergedPdfBuffer = await merger.saveAsBuffer();
    // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = { merger_pdf }