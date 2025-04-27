# CV Builder | Create CV With Ease

A web-based CV builder that allows users to create and download their CV in PDF and DOCX formats. This project is built using **React**, **TailwindCSS**, and **Ant Design**.

## Live Demo

- [CV Builder](https://cv-builder-b3011.web.app/)

## Screenshots

![App Screenshot](https://i.ibb.co.com/2Yf9bpzz/cv-builder-mocup.webp)

## Diagram

![App Screenshot](https://i.ibb.co.com/q3wm0PjR/diagram-export-25-04-2025-19-34-40.webp)

## **Technologies Used**

- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Ant Design**: A popular React UI library for building responsive layouts.
- **html2pdf**: Library for converting HTML to PDF.
- **docx**: JavaScript library for creating and generating DOCX files.

## **Features**

- **Personal Details**: Input personal information like name, email, phone, and address.
- **Experience**: Add job positions, companies, durations, and descriptions.
- **Projects**: List projects, including technologies used, descriptions, and links.
- **Academic & Extracurriculars**: Add education and extracurricular activities.

- **Layout Options**: Choose between multiple CV templates (Classic, Modern etc).

- **Customizability**: Choose different colour, font.

- **Download Options**: Download your CV in **PDF** or **DOCX** formats.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/shakilahmedatik/cv-builder-react.git
cd cv-builder-react
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```bash
http://localhost:5173
```

## Environment Variables

This prjects requires firebase authentication api credentials. You can get them from [firebase console](https://console.firebase.google.com/).
Create a .env.local file in the root directory and provide the following variables:

`VITE_apiKey`
`VITE_authDomain`
`VITE_projectId`
`VITE_storageBucket`
`VITE_messagingSenderId`
`VITE_appId`

## **How to Use**

1.  **Personal Details**: Fill in your name, email, phone, and address.
2.  **Experience**: Add work experience including job title, company name, duration, and description.
3.  **Projects**: List the projects you’ve worked on with descriptions and links.
4.  **Academic & Extracurriculars**: Add your academic background and extracurricular activities.
5.  **Preview & Download**: Review your CV and download it in your preferred format (PDF or DOCX).

## **Features to Add**

- **Multiple CV Layout Templates**: Provide more layout options for CV design.

- **Data Sync**: Store existing cv and server them as per need
- **Customization**: Allow users to select the font style, color scheme, and CV sections.

## **License**

This project is open-source and available under the [MIT License](LICENSE).
