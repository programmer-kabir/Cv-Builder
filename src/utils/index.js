import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import html2pdf from 'html2pdf.js'
import { saveAs } from 'file-saver'
import { Document, Packer, Paragraph, TextRun } from 'docx'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const downloadPDF = printRef => {
  const element = printRef.current
  console.log(element)
  const opt = {
    margin: 0.3,
    filename: 'cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }
  try {
    html2pdf().set(opt).from(element).save()
  } catch (err) {
    console.log(err)
  }
}

export const downloadDOC = async cvData => {
  const { personalDetails, experience, projects, academics } = cvData

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: personalDetails?.name,
                bold: true,
                size: 28,
              }),
            ],
          }),
          new Paragraph(personalDetails?.email),
          new Paragraph(personalDetails?.phone),
          new Paragraph(' '),
          ...experience.map(
            exp =>
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${exp?.position} at ${exp?.company} (${exp?.duration})`,
                    bold: true,
                  }),
                ],
              })
          ),
          new Paragraph(' '),
          ...projects.map(
            proj =>
              new Paragraph({
                children: [
                  new TextRun({ text: proj?.title, bold: true }),
                  new TextRun({ text: ` - ${proj?.description}` }),
                ],
              })
          ),
          new Paragraph(' '),
          new Paragraph('Education:'),
          new Paragraph(academics?.education || ''),
          new Paragraph('Extracurriculars:'),
          new Paragraph(academics?.extracurriculars || ''),
        ],
      },
    ],
  })

  try {
    const blob = await Packer.toBlob(doc)
    saveAs(blob, 'cv.docx')
  } catch (err) {
    console.log(err)
  }
}
