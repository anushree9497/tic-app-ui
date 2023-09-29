import { Component , OnInit} from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors, FormArray, FormControl } from "@angular/forms";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-lifting-gear-new',
  templateUrl: './lifting-gear-new.component.html',
  styleUrls: ['./lifting-gear-new.component.scss']
})
export class LiftingGearNewComponent implements OnInit{
  model: NgbDateStruct;
  content=''
  modules= {}
  liftingGearForm: FormGroup;
  showIds = false;





  addedIds: Set<string> = new Set();

  constructor(private fb: FormBuilder){
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button
      ]
    };
  }

  ngOnInit(){
    this.initLiftingGearForm();
  }

  initLiftingGearForm() {
    this.liftingGearForm = this.fb.group({
      client: ['', Validators.required],
      address: ['', Validators.required],
      dateOfInspection: ["", Validators.required ],
      typeOfExam : ["", Validators.required],
      placeOfInspection : ["", Validators.required],
      surveyor: ["", Validators.required],
      authority: ["", Validators.required],
      category: ["", Validators.required],
//       equipmentNo: ["", Validators.required],
      manufacturer:["", Validators.required],
      yearOfManufacture:["", Validators.required],
      testCertificateNo:["", Validators.required],
      previousCertificateNo:["", Validators.required],
      standard:["", Validators.required],
      safeWorkingLoad:["", Validators.required],
      proofLoad:["", Validators.required],
      testInspectionFrequency:["", Validators.required],
      thoroughInspectionFrequency:["", Validators.required],
      lastTestExam:["", Validators.required],
      nextTestExam:["",Validators.required],
      lastThoroughExam:["",Validators.required],
      nextThoroughExam:["",Validators.required],
      result:["", Validators.required],
      description:["",Validators.required],
      idInput: [''],
      ids: this.fb.array([], [Validators.required])
    },
    );
  }

  get idArray() {
    return this.liftingGearForm.get('ids') as FormArray;
  }

  addId(id: string) {
    if (!this.addedIds.has(id) && this.idArray.length < 25) {
      this.idArray.push(this.fb.control(id));
      this.addedIds.add(id);
      this.liftingGearForm.get('idInput')?.reset();
    }
  }

  removeId(index: number) {
  const removedId = this.idArray.at(index).value;
    this.idArray.removeAt(index);
    this.addedIds.delete(removedId);
  }

  onSubmit() {
    this.openPDF()
    // Handle form submission here
    if (this.liftingGearForm.valid) {
      console.log('Form submitted with values:', this.liftingGearForm.value);
    }
  }

  openPDF(): void {
    console.log(this.liftingGearForm.get('description')?.value)
    const PDF = new jsPDF('p', 'mm', 'a4');

    // Define the logo image and its dimensions
    const logoImage = new Image();
    logoImage.src = 'https://i.ibb.co/284xkV4/delete.png';

    // Wait for the image to load
    logoImage.onload = () => {
    const logoWidth = 50; // Set the width of the logo
    const logoHeight = (logoImage.height * logoWidth) / logoImage.width;

    // Define header content and footer
    const headerText = 'Header Text Centered Below Logo';
    const footerText = 'Page Footer';

    // Define HTML content
    const htmlContent = `
      <div>
        <p>ghhg</p>
        <br>
        <p>hhh</p>
      </div>

    `;

    // Calculate available space for content
    const availableSpaceHeight = PDF.internal.pageSize.height - logoHeight - 20; // Adjust as needed
    const contentHeight = PDF.getTextDimensions(htmlContent).h;

    if (contentHeight < availableSpaceHeight) {
    // If content fits in the available space, add it
    PDF.text(htmlContent, 10, logoHeight + 10); // Adjust the position as needed
    } else {
    // If content exceeds the available space, create new pages
    PDF.addPage();
    PDF.text(htmlContent, 10, 10); // Adjust the position as needed
    }

    // Add the logo at the top center
    PDF.addImage(logoImage, 'PNG', (PDF.internal.pageSize.width - logoWidth) / 2, 10, logoWidth, logoHeight);

    // Add header text centered below the logo
    PDF.setFontSize(14);
    PDF.text(headerText, PDF.internal.pageSize.width / 2, logoHeight + 5, { align: 'center' });

    // Add footer text
    PDF.setFontSize(12);
    PDF.text(footerText, PDF.internal.pageSize.width / 2, PDF.internal.pageSize.height - 10, { align: 'center' });

    // Open the PDF in a new tab for viewing
    const blobPDF = PDF.output('blob');
    const blobURL = URL.createObjectURL(blobPDF);
    window.open(blobURL, '_blank');
    };

//  const PDF = new jsPDF('p', 'mm', 'a4');
//
//   // Define the HTML content
//   const contentHTML = `
//     <div>
//       <p>ghhg</p>
//       <br>
//       <p>hhh</p>
//     </div>
//   `;
//
//   // Convert HTML content to PDF
//   PDF.html(contentHTML, {
//     callback: (pdf) => {
//       // Add additional content, headers, or images if needed
//       pdf.save('your-document.pdf');
//     },
//   });
//




    const options = {
      filename: 'example.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', autoPaging:'text' },
      // Add headers and footers to all pages
      margin: [20, 10], // Specify the margins as an array with top and bottom values
      pagebreak: { before: '.page-break' },
    };

    const htmlContent = `
      <div>
             <div style="padding-top:40px;padding-bottom:35px">
                <table style="width:100%;">
                    <tr style="height:5px">
                        <td style="border-top: 5px solid #464581;padding: 0; "></td>
                    </tr>
                </table>
             </div>
            <h6 align="center">
                <span style="font-size:30px; font-weight:bolder; font-family: 'Times New Roman';">
                    CERTIFICATE
                </span>
                <br>
                <span style="font-size:20px;color:red;font-weight:bolder;font-family: 'Times New Roman'">Of Thorough Examination of Lifting Gear</span>
            </h6>
            <div style="padding-top:4px">
              <div style="padding-bottom:5px">
                <table style=" width:100%; font-size: 10pt; font-weight:bold;font-family: 'Arial Narrow'">
                    <tr>
                        <td style="width: 33.333%;text-align: left">Certificate No.:  </td>
                        <td style="width: 33.333%;text-align: left;">Project No.:  </td>
                        <td style="width: 33.333%;text-align: left;"> Date of Inspection:  </td>
                    </tr>
                </table>
              </div>

              <table cellspacing="0" cellpadding="0" border="5" style="font-size:10pt;font-family: 'Arial Narrow';width:100%;border-collapse:collapse;border:none;font-family: 'Arial Narrow'">
                <tr style="font-weight:bold">
                    <td  align="center" style='vertical-align: top;width:50%;border-top:1.5pt;
                          border-left:1.5pt;border-bottom:0.25pt;border-right:0.1pt;border-color:windowtext;
                          border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>
                            <div align="left">Name & Address of the Owner: </div>
                          <span >TRAGS</span><br>
                          <div style="padding-bottom:5px">DOHA – QATAR</div>
                          </td>
                    <td style='vertical-align: top;border-top:1.5pt;width:50%;
                            border-bottom:0.25pt; border-right:1.5pt;border-color:windowtext;
                            border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Place of Inspection:
                            <div align="center" style="padding-bottom:5px">TRAGS FABRICATION WORKSHOP<div>
                            </td>
                </tr>
                <tr style="font-weight:bold">
                    <td style='vertical-align: top;width:50%;
                          border-left:1.5pt;border-right:0.5pt;border-color:windowtext;
                          border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Maker or Supplier:
                          <div align="center" style="padding-bottom:5px">LIFTINGEAR<div>
                          </td>
                    <td style='vertical-align: top; width:50%;
                            border-right:1.5pt;border-color:windowtext;
                            border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Standard:
                            <div align="center" style="padding-bottom:5px">BS EN 1492-1:2000+A1:2008  / QP-PAI-STD-005-REV-00<div>
                            </td>
                </tr>
              </table>

              <table cellspacing="0" cellpadding="0" border="5" style="width:100%;border-collapse:collapse;border:none; font-size:10pt; font-family: 'Arial Narrow'">
                <tr align="center">
                    <td style='width:17%;border-top:0.5pt;
                          border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                          border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>ID No.:</b></td>
                    <td style='width:7%;border-top:0.5pt;
                            border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                            border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>Qty.</b></td>
                    <td style='width:50%;border-top:0.5pt;
                           border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                           border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>Description</b></td>
                    <td style='width:12%;border-top:0.5pt;
                          border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                          border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>APPLIED TEST LOAD</b></td>
                    <td style='width:14%;border-top:0.5pt;
                            border-bottom:0.5pt;border-right:1.5pt;border-color:windowtext;
                            border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>SWL</b></td>
                </tr>
                <tr>
                    <td align="center" style='width:17%;border-bottom:1.5pt;
                          border-left:1.5pt;border-right:0.5pt;border-color:windowtext;
                          border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><p>Column 1</p><p>Column 1</p></td>
                    <td align="center" style='width:7%;border-bottom:1.5pt;
                            border-right:0.5pt;border-color:windowtext;
                            border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>2</td>
                    <td  style='width:50%;border-bottom:1.5pt;
                            border-right:0.5pt;border-color:windowtext;
                            border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><div align="center" style="font-weight:bold;font-style: italic;padding-bottom:5px; padding-top:2px"><span class=line>FLAT WEBBING SLING</span></div><div>
                            <p><br></p><p>TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;DUPLEX POLYESTER, SOFT EYE.</p><p>WIDTH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;60 mm</p><p>EWL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;2.0 m</p><p>COLOUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;GREEN</p><p>YOM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;DECEMBER 2021</p><p>DATE OF INITIAL USE : FEBRUARY 2022</p><p>FOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;7:1</p><p>&nbsp;</p><p>Date of Break Test Certificate: BVI.DOA.22.IVS.223A.80.WS.02/211345</p><p>DATE&nbsp;&nbsp;: 01/02/2022</p><p>&nbsp;CoC : TL213807/0202/01 / DATED : 22/12/2021</p><p>&nbsp;</p><p><strong><u>NOTE:</u></strong>&nbsp;&nbsp;1. CAN BE USE IN QATAR ENERGY OPERATIONAL AREA UP TO 02/02/2026.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. SHALL NOT BE USED FOR OFFSHORE </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRANSPORTATION.</p>
                            </div></td>
                    <td align="center" style='width:12%;border-bottom:1.5pt;
                          border-right:0.5pt;border-color:windowtext;
                          border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Column 1</td>
                    <td align="center" style='width:14%;border-bottom:1.5pt;
                            border-right:1.5pt;border-color:windowtext;
                            border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><p>Column 1</p><br><p>Column 1</p></td>
                </tr>
              </table>

              <div style="padding-top:8px">
                <table  cellspacing="0" cellpadding="0" border="5" style="font-size:10pt;font-family: 'Arial Narrow';width:100%;border-collapse:collapse;border:none">
                  <tr align="center" style="font-we ight:bold">
                      <td style='border-top:1.5pt;
                            border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                            border-style:solid;padding:5pt 5.4pt 5pt 5.4pt;'>Date of Last Examination</td>
                      <td style='border-top:1.5pt;
                              border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                              border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Date of Next Examination</td>
                      <td style='border-top:1.5pt;
                              border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                              border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Date of Last Proof Load Test</td>
                      <td style='border-top:1.5pt;
                             border-bottom:0.5pt;border-right:1.5pt;border-color:windowtext;
                             border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Date of Next Proof Load Test</td>
                  </tr>
                  <tr align="center">
                      <td style='
                            border-left:1.5pt;border-bottom:1.5pt;border-right:0.5pt;border-color:windowtext;
                            border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Column 1</td>
                      <td style='
                              border-bottom:1.5pt;border-right:0.5pt;border-color:windowtext;
                              border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Column 2</td>
                      <td style='
                              border-bottom:1.5pt;border-right:0.5pt;border-color:windowtext;
                              border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Column 3</td>
                      <td style='
                             border-bottom:1.5pt;border-right:1.5pt;border-color:windowtext;
                             border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Column 3</td>
                  </tr>
                </table>
              </div>

              <div style="padding-top:10px">
                <table cellspacing="0" cellpadding="0" border="0" style="font-size:10pt;font-family: 'Arial Narrow';width:100%;border-collapse:collapse;border:none;border-color:white;font-family: 'Arial Narrow'">
                  <tr>
                      <td  align="left" style='vertical-align: top;width:50%;border-top:1.5pt;
                      border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:white;
                      border-style:solid;padding:15pt 5.4pt 15pt 5.4pt;'>
                        Authorized Name: <span style="font-weight:bold; padding-left:20px">RAHUL RAO </span></br>
                        <span  style="padding-top:5px; padding-left:110px">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>
                        <div style="padding-left:100px; padding-top:0px"></div>
                      </td>
                      <td  align="left" style='vertical-align: top;width:50%;border-top:1.5pt;
                      border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:white;
                      border-style:solid;padding:15pt 5.4pt 15pt 5.4pt;'>
                        Surveyor's Name: <span style="font-weight:bold; padding-left:20px">RAHUL RAO </span></br>
                        <span  style="padding-top:5px; padding-left:110px">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>
                        <div style="padding-left:100px; padding-top:0px"></div>
                      </td>
                  </tr>
                  <tr>
                      <td  align="left" style='vertical-align: top;width:50%;border-top:1.5pt;
                      border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:white;
                      border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>
                        Authorized Signature: </br>
                        <span  style="padding-top:0px; padding-left:110px">_____________________________</span>
                        <div style="padding-left:100px; padding-top:0px"></div>
                      </td>
                      <td  align="left" style='vertical-align: top;width:50%;border-top:1.5pt;
                      border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:white;
                      border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>
                        Surveyor's Signature: </br>
                        <span  style="padding-top:5px; padding-left:110px">____________________________</span>
                      </td>
                  </tr>
                </table>
              </div>
              <div style="padding-top:20px;font-family: 'Arial'; font-size:10pt">
              <span style="font-weight:bold">THIS IS TO CERTIFY THAT</span>  the above competent surveyor thoroughly examined the lifting equipment in the above-mentioned place as per Qatar Energy Corporate Standard for Lifting Equipment and Operations. The liabilities and insurance are as per ABS Group Inc. General Conditions of Services.
              </div>
            </div>
      </div>
    `;

    const additionalCSS = `
      <style>
        /* Reduce spacing between <p> tags */
        p {
          margin-top: 0; /* Set top margin to 0 */
            margin-bottom: 0; /* Set bottom margin to 0 */
            padding-top: 0; /* Set top padding to 0 */
            padding-bottom: 2px; /* Set bottom padding to 0 */
            line-height: 13px; /* Ensure line height is minimal */
        }
         .line {
            padding-bottom: 2px;
            border-bottom-style: solid;
            border-bottom-width: 2.1px;
            width: fit-content;
          }
      </style>
    `;

    const finalHTML = `<html><head>${additionalCSS}</head><body>${htmlContent}</body></html>`;

    html2pdf().from(finalHTML).set(options).toPdf().get('pdf').then(function (pdf){
        var totalPages = pdf.internal.getNumberOfPages();
        console.log(pdf.internal.pageSize.getHeight())
        for (let i = 1; i <= totalPages; i++) {
          // set footer to every page
          pdf.setPage(i);
          // set footer font
          pdf.setFontSize(10);
          pdf.setTextColor(150);
          // this example gets internal pageSize just as an example to locate your text near the borders in case you want to do something like "Page 3 out of 4"
          pdf.text(pdf.internal.pageSize.getWidth() - 35,
          pdf.internal.pageSize.getHeight() - 281 , 'Page '+i + ' of ' +totalPages);
        }

       const pdfBlob = pdf.output('blob');

          // Create a URL for the Blob
          const url = URL.createObjectURL(pdfBlob);

          // Open the PDF in a new tab
          const newTab = window.open();
          if (newTab) {
            newTab.location.href = url;
          } else {
            alert('Please allow pop-ups to open the PDF in a new tab.');
          }
    });


//   const pdf = new jsPDF();
//   const margin = 10;
//   const pageHeight = pdf.internal.pageSize.height;
//   const pageWidth = pdf.internal.pageSize.width;
//
//   const header = 'Header for all pages';
//   const footer = (pageNum: number, totalPages: number) => `Footer - Page ${pageNum} of ${totalPages}`;
//
//   const totalPages = 2; // Set the total number of pages based on your content.
//
//   for (let i = 0; i < totalPages; i++) {
//     if (i > 0) {
//       pdf.addPage();
//     }
//
//     // Add header
//     pdf.setFontSize(18);
//     pdf.text(header, pageWidth / 2, margin, { align: 'left' });
//
//     // Add content
//     // Replace this with your content for each page.
//
//     // Add footer
//     pdf.setFontSize(14);
//     pdf.text(footer(i + 1, totalPages), pageWidth / 2, pageHeight - margin, { align: 'right' });
// }
//   pdf.save('example.pdf');


  }





  generatePDF() {

  //     const PDF = new jsPDF('p', 'mm', 'a4');
  //
  //     // Define the logo image and its dimensions
  //     const logoImage = new Image();
  //     logoImage.src = 'https://i.ibb.co/284xkV4/delete.png';
  //
  //     // Wait for the image to load
  //     logoImage.onload = () => {
  //     const logoWidth = 50; // Set the width of the logo
  //     const logoHeight = (logoImage.height * logoWidth) / logoImage.width;
  //
  //     // Define header content and footer
  //     const headerText = 'Header Text Centered Below Logo';
  //     const footerText = 'Page Footer';
  //
  //     // Define HTML content
  //     const htmlContent = `
  //       <div>
  //         <p>ghhg</p>
  //         <br>
  //         <p>hhh</p>
  //       </div>
  //     `;
  //
  //     // Calculate available space for content
  //     const availableSpaceHeight = PDF.internal.pageSize.height - logoHeight - 20; // Adjust as needed
  //     const contentHeight = PDF.getTextDimensions(htmlContent).h;
  //
  //     if (contentHeight < availableSpaceHeight) {
  //     // If content fits in the available space, add it
  //     PDF.text(htmlContent, 10, logoHeight + 10); // Adjust the position as needed
  //     } else {
  //     // If content exceeds the available space, create new pages
  //     PDF.addPage();
  //     PDF.text(htmlContent, 10, 10); // Adjust the position as needed
  //     }
  //
  //     // Add the logo at the top center
  //     PDF.addImage(logoImage, 'PNG', (PDF.internal.pageSize.width - logoWidth) / 2, 10, logoWidth, logoHeight);


    const PDF = new jsPDF('p', 'mm', 'a4');

    // Define the logo image and its dimensions
    const logoImage = new Image();
    logoImage.src = 'https://i.ibb.co/284xkV4/delete.png'; // Replace with your logo URL
    logoImage.onload = () => {
    const logoWidth = 50; // Set the width of the logo
        const logoHeight = (logoImage.height * logoWidth) / logoImage.width;

        // Define header content and footer content
        const headerText = 'Header Text Centered Below Logo';
        const footerText = 'Page Footer Text';

        // Define HTML-formatted content for the table
        const tableHTML = `
   <table style="border: 1px solid #000;">
     <tr>
       <th style="border: 1px solid #000;">Column 1</th>
       <th style="border: 1px solid #000;">Column 2</th>
     </tr>
     <tr>
       <td style="border: 1px solid #000;">Data 1</td>
       <td style="border: 1px solid #000;">Data 2</td>
     </tr>
   </table>
   <br>
      <table style="border: 1px solid #000;">
        <tr>
          <th style="border: 1px solid #000;">Column 1</th>
          <th style="border: 1px solid #000;">Column 2</th>
        </tr>
        <tr>
          <td style="border: 1px solid #000;">Data 1</td>
          <td style="border: 1px solid #000;">Data 2</td>
        </tr>
      </table>
      <br>
         <table style="border: 1px solid #000;">
           <tr>
             <th style="border: 1px solid #000;">Column 1</th>
             <th style="border: 1px solid #000;">Column 2</th>
           </tr>
           <tr>
             <td style="border: 1px solid #000;">Data 1</td>
             <td style="border: 1px solid #000;">Data 2</td>
           </tr>
         </table>
        `;

        // Calculate available space for content
        const availableSpaceHeight = PDF.internal.pageSize.height - logoHeight - 20; // Adjust as needed

        // Create a div element for the table content
        const tableDiv = document.createElement('div');
        tableDiv.innerHTML = tableHTML;
const tableY = logoHeight + 30;
        // Convert HTML content to PDF
        PDF.html(tableDiv, {
          x: 10, // X-coordinate for the table
          y: tableY, // Y-coordinate for the table
          callback: (pdf) => {


             // Calculate available space for content
              const availableSpaceHeight = pdf.internal.pageSize.height - logoHeight - 20; // Adjust as needed
              const contentHeight = pdf.getTextDimensions(tableHTML).h;

              if (contentHeight < availableSpaceHeight) {
              // If content fits in the available space, add it
              pdf.text(tableHTML, 10, logoHeight + 10); // Adjust the position as needed
              } else {
              // If content exceeds the available space, create new pages
              pdf.addPage();
              pdf.text(tableHTML, 10, 10); // Adjust the position as needed
              }



              // Open the PDF in a new tab for viewing
//               const blobPDF = pdf.output('blob');
//               const blobURL = URL.createObjectURL(blobPDF);
//               window.open(blobURL, '_blank');





            // Add the logo at the top center
            pdf.addImage(logoImage, 'PNG', (pdf.internal.pageSize.width - logoWidth) / 2, 10, logoWidth, logoHeight);

            // Add header text centered below the logo
            pdf.setFontSize(14);
            pdf.text(headerText, pdf.internal.pageSize.width / 2, logoHeight + 15, { align: 'center' });

            // Add footer text and logo at the bottom center
            pdf.setFontSize(12);
            pdf.text(footerText, pdf.internal.pageSize.width / 2, pdf.internal.pageSize.height - 10, { align: 'center' });
//             pdf.addImage(logoImage, 'PNG', (pdf.internal.pageSize.width - logoWidth) / 2, pdf.internal.pageSize.height - 20, logoWidth, logoHeight);

//             Save the PDF
            pdf.save('your-document.pdf');
          },
        });
    };

  }



  submit(){
    console.log('gg')
    alert(this.content)
  }
}
