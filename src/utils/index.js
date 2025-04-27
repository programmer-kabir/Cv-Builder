import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import html2pdf from 'html2pdf.js'
import { saveAs } from 'file-saver'
import { Document, Packer, Paragraph, TextRun } from 'docx'

// Tailwind Classes Merging Utility Function
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// PDF Download Function
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

// Doc Download Function
export const downloadDOC = async cvData => {
  console.log(cvData)
  const { personalDetails, experience, projects, academics } = cvData

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: personalDetails.name || '',
                bold: true,
                size: 32,
                color: '0000FF',
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                `${personalDetails.email} | ${personalDetails.phone}`
              ),
            ],
          }),
          new Paragraph({
            border: {
              top: { color: 'auto', space: 1, size: 6, style: 'single' },
            },
          }),
          new Paragraph(' '),

          new Paragraph({ text: 'Overview', heading: 'Heading1' }),
          new Paragraph(personalDetails.overview || ''),
          new Paragraph(' '),

          new Paragraph({ text: 'Skills', heading: 'Heading1' }),
          new Paragraph(personalDetails.skills || ''),
          new Paragraph(' '),

          new Paragraph({ text: 'Experience', heading: 'Heading1' }),
          ...experience
            .map(exp => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${exp.position} at ${exp.company}`,
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                text: exp.duration,
              }),
              new Paragraph(' '),
            ])
            .flat(),

          new Paragraph({ text: 'Projects', heading: 'Heading1' }),
          ...projects
            .map(proj => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: proj.title,
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                text: proj.description,
              }),
              new Paragraph(' '),
            ])
            .flat(),

          new Paragraph({ text: 'Education', heading: 'Heading1' }),
          new Paragraph(academics.education || ''),
          new Paragraph(' '),

          new Paragraph({
            text: 'Extracurricular Activities',
            heading: 'Heading1',
          }),
          new Paragraph(academics?.['extracurricular-activity'] || ''),
        ],
      },
    ],
  })

  try {
    const blob = await Packer.toBlob(doc)
    saveAs(blob, `${personalDetails.name || 'cv'}.docx`)
  } catch (err) {
    console.error(err)
  }
}
