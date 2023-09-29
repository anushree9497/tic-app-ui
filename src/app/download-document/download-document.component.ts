import { Component, Input, OnInit, NgZone } from '@angular/core';
// import * as htmlToRtf from 'html-to-rtf';
import * as htmlDocx from 'html-docx-js-typescript';

import HtmlToRtfBrowser from 'html-to-rtf-browser';
var htmlToRtf = new HtmlToRtfBrowser();


@Component({
  selector: 'app-download-document',
  templateUrl: './download-document.component.html',
  styleUrls: ['./download-document.component.scss']
})
export class DownloadDocumentComponent implements OnInit {

  htmlString: string = `
  <h2></h2>

      <p align="center">CERTIFICATE</><p>
      <div>
      	<p style="color:#333; margin:5px;" class="test" align="center">
      	    text of paragraph <b>text with bold <i>text with italic and bold</i></b><i>text with italic</i>
      	</p>
      	<p style="color:rgb(255,0,0);" align="right">red paragraph => right with tag</p>
      	<p style="color:rgb(0,0,255); text-align:center;">blue paragraph => center with style</p>
      	<table align="center" class="border-3">
      		<tbody>
      			<tr>
                  <td align="left">
                    <td>Name & Address of the Owner:</td>
                    <b> <br><br>QATAR PETROLEUM <br>P.O.BOX:12345, DOHA – QATAR</b>
                  </td>
                  <td><b>Place of Inspection: <br><br>DOHA – QATAR</b></td>
                  <tr>

                  </tr>
      			</tr>
      		</tbody>
      	</table>
      	<table align="center">
          <tbody>
          	<tr>
              <td>Place of Inspection: DOHA – QATAR</td>
          	</tr>
          </tbody>
        </table>
      </div>
  `;
  rtfString: string;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
//     this.downloadDocx(this.htmlString)
    this.downloadRtf(this.htmlString)
  }

   downloadDocx(html: string) {
       const htmlContent = `
       <h6 align="center">
         <span style="font-size:30px; font-weight:bolder; font-family: 'Times New Roman';">
             CERTIFICATE
         </span>
         <br>
         <span style="color:red;font-weight:bolder;font-family: 'Times New Roman'">Of Thorough Examination of Lifting Gear</span>
       </h6>
         <div class="content">

               <div style="padding-top:2px">
                 <div style="padding-bottom:5px">
                   <table style=" width:100%; font-size: 17px; font-weight:bold">
                       <tr>
                           <td style="width: 33.333%;text-align: left">Certificate No.:  </td>
                           <td style="width: 33.333%;text-align: left;">Project No.:  </td>
                           <td style="width: 33.333%;text-align: left;"> Date of Inspection:  </td>
                       </tr>
                   </table>
                 </div>

                 <table cellspacing="0" cellpadding="0" border="5" style="font-size: 17px;width:100%;border-collapse:collapse;border:none">
                   <tr style="font-weight:bold">
                       <td  align="center" style='vertical-align: top;width:50%;border-top:1.5pt;
                             border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                             border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>
                               <div align="left">Name & Address of the Owner: </div>
                             <span >TRAGS</span><br>
                             <div style="padding-bottom:5px">DOHA – QATAR</div>
                             </td>
                       <td style='vertical-align: top;border-top:1.5pt;width:50%;
                               border-bottom:0.5pt;border-right:1.5pt;border-color:windowtext;
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

                 <table cellspacing="0" cellpadding="0" border="5" style="width:100%;border-collapse:collapse;border:none;font-size: 17px;">
                   <tr align="center">
                       <td style='width:17%;border-top:0.5pt;
                             border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                             border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>ID No.:</b></td>
                       <td style='width:7%;border-top:0.5pt;
                               border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                               border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>Qty.</b></td>
                       <td style='width:42%;border-top:0.5pt;
                              border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                              border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>Description</b></td>
                       <td style='width:17%;border-top:0.5pt;
                             border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                             border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><b>APPLIED TEST LOAD</b></td>
                       <td style='width:17%;border-top:0.5pt;
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
                       <td  style='width:42%;border-bottom:1.5pt;
                               border-right:0.5pt;border-color:windowtext;
                               border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><div align="center" style="font-weight:bold;font-style: italic;padding-bottom:5px; padding-top:2px"><u>FLAT WEBBING SLING</u></div><div>
                               <p><br></p><p>TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;DUPLEX POLYESTER, SOFT EYE.</p><p>WIDTH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;60 mm</p><p>EWL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;2.0 m</p><p>COLOUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;GREEN</p><p>YOM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;DECEMBER 2021</p><p>DATE OF INITIAL USE : FEBRUARY 2022</p><p>FOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;7:1</p><p>&nbsp;</p><p>Date of Break Test Certificate: BVI.DOA.22.IVS.223A.80.WS.02/211345</p><p>DATE&nbsp;&nbsp;: 01/02/2022</p><p>&nbsp;CoC : TL213807/0202/01 / DATED : 22/12/2021</p><p>&nbsp;</p><p><strong><u>NOTE:</u></strong>&nbsp;&nbsp;1. CAN BE USE IN QATAR ENERGY OPERATIONAL AREA UP TO 02/02/2026.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. SHALL NOT BE USED FOR OFFSHORE </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRANSPORTATION.</p>
                               </div></td>
                       <td align="center" style='width:17%;border-bottom:1.5pt;
                             border-right:0.5pt;border-color:windowtext;
                             border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Column 1</td>
                       <td align="center" style='width:17%;border-bottom:1.5pt;
                               border-right:1.5pt;border-color:windowtext;
                               border-style:solid;padding:0in 5.4pt 0in 5.4pt;'><p>Column 1</p><br><p>Column 1</p></td>
                   </tr>
                 </table>

                 <div style="padding-top:5px">
                   <table  cellspacing="0" cellpadding="0" border="5" style="font-size: 17px;width:100%;border-collapse:collapse;border:none">
                     <tr align="center" style="font-weight:bold">
                         <td style='border-top:1.5pt;
                               border-left:1.5pt;border-bottom:0.5pt;border-right:0.5pt;border-color:windowtext;
                               border-style:solid;padding:0in 5.4pt 0in 5.4pt;'>Date of Last Examination</td>
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
                     <tr>
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

         </div>
       `;

       const additionalCSS = `
         <style>
            body{
                font-family: "Arial Narrow", Arial, sans-serif;
            }
           /* Reduce spacing between <p> tags */
           p {
             margin-top: 0; /* Set top margin to 0 */
               margin-bottom: 0; /* Set bottom margin to 0 */
               padding-top: 0; /* Set top padding to 0 */
               padding-bottom: 5px; /* Set bottom padding to 0 */
               line-height: 15px; /* Ensure line height is minimal */
           }
             .header {
                 position: fixed;
                 top: 0;
                 width: 100%;
                 background-color: #f0f0f0;
                 text-align: center;
                 padding: 10px;
                 font-size: 16px;
               }

               .content {
                   padding-right:0px;
                   padding-left:0px;

                 }


         </style>
       `;

       const finalHTML = `<html><head>${additionalCSS}</head><body>${htmlContent}</body></html>`;
       htmlDocx.asBlob(finalHTML)
             .then((result: Blob | Buffer) => {
               if (result instanceof Blob) {
                 this.ngZone.runOutsideAngular(() => {
                   // Create a URL from the Blob
                   const url = window.URL.createObjectURL(result);

                   // Create an anchor element to trigger the download
                   const a = document.createElement('a');
                   a.style.display = 'none';
                   a.href = url;
                   a.download = 'file.docx';

                   // Trigger the download
                   document.body.appendChild(a);
                   a.click();

                   // Clean up the URL
                   window.URL.revokeObjectURL(url);
                 });
               } else {
                 console.error('Error: Result is not a Blob');
               }
             })
             .catch(error => {
               console.error('Error generating or downloading the Word document:', error);
             });
//       const rtfContent = htmlToRtf(html);
//
//       // Create a Blob with the RTF content
//       const blob = new Blob([rtfContent], { type: 'application/rtf' });
//
//       // Create a download link and trigger the download
//       const a = document.createElement('a');
//       a.href = window.URL.createObjectURL(blob);
//       a.download = 'xyz' + '.rtf';
//       document.body.appendChild(a);
//       a.click();
//
//       // Clean up
//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(a.href);
    }


    downloadRtf(htmlString){
        const htmlContent = `
           <h1 align="center">
              <span><b>CERTIFICATE</b></span>
              <br>
              <span style="color:rgb(255,0,0); font-size:15pt"><b>Of Thorough Examination of Lifting Gear</b></span>
           </h1>
           <h1><span style='font-family:"Times New Roman",serif;font-style:normal'>CERTIFICATE</span></h1>

           <p class=MsoNormal><b><span style='font-size:11.0pt;
           font-family:"Arial Narrow",sans-serif'>Certificate No.: /23/RR/yhjyuyuyuiuiuii        Project No.: 5fgtyty        Date of Inspection: 10/06/2023</span></b></p>

            <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=900pt
             style='border-collapse:collapse;border:none'>
             <tr style='page-break-inside:avoid;height:62.4pt'>
              <td width=500 colspan=3 valign=top style='width:400pt;border-top:1.5pt;
              border-left:1.5pt;border-bottom:1.0pt;border-right:1.0pt;border-color:windowtext;
              border-style:solid;padding:0in 5.4pt 0in 5.4pt;height:62.4pt'>
              <p class=MsoNormal style='margin-top:2.0pt'><b><span style='font-size:10.0pt;
              font-family:"Arial Narrow",sans-serif'>Name &amp; Address of the Owner:</span></b></p>
              <p class=MsoNormal align=center style='text-align:center'><b><span
              style='font-size:8.0pt;font-family:"Arial Narrow",sans-serif'>&nbsp;</span></b></p>
              </td>
              <td width=338 colspan=3 valign=top style='width:253.85pt;border-top:solid windowtext 1.5pt;
              border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.5pt;
              padding:0in 5.4pt 0in 5.4pt;height:62.4pt'>
              <p class=MsoNormal style='margin-top:2.0pt'><b><span style='font-size:10.0pt;
              font-family:"Arial Narrow",sans-serif'>Place of Inspection:</span></b></p>
              <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:"Arial Narrow",sans-serif'>                                                         </span></b></p>
              <p class=MsoNormal align=center style='text-align:center'><b><span
              style='font-size:10.0pt;font-family:"Arial Narrow",sans-serif'>&nbsp;</span></b></p>
              </td>
             </tr>
           </table>
            <br>
            <div align="center">
                <table style="border-collapse: collapse; border: none; width:1000pt">
                                   <tr style="border: none;">
                                       <td style="border: none;">ff
                                       </td>
                                   </tr>
                               </table>
            </div>
           <table style="border-collapse: collapse;border:2px solid black;">
           		<tbody>
           			<tr>
                           <td style="border-collapse: collapse;border:2px solid black;"><mark>column 1</mark></td>
                           <td style="border-collapse: collapse;border:2px solid black;">column 2</td>
           				<td><mark>column 3</mark></td>
           				<td>column 4</td>
           				<td>column 5</td>
           			</tr>
           			<tr>
           				<td>content 1</td>
           				<td>content 2<br></td>
           				<td>content 3<br></td>
           				<td>content 4<br></td>
           				<td>column 5</td>
           			</tr>
           		</tbody>
           	</table>
           <div class="row">
                <div class="column" style="background-color:#FFB695;">
                    <h2>Column 1</h2>
                    <p>Data..</p>
                </div>
                <div class="column" style="background-color:#96D1CD;">
                    <h2>Column 2</h2>
                    <p>Data..</p>
                </div>
           </div>
<h1>Title <span style="color:rgb(255,0,0);">with</span> tag h1<h1>
<p> start of an image (with width and height defined): </p>
<div>
	<p style="color:#333; margin:5px;" class="test" align="center">
	    text of paragraph <b>text with bold <i>text with italic and bold</i></b><i>text with italic</i>
	</p>
	<p style="color:rgb(255,0,0);font-size:10pt" align="right">red paragraph => right with tag</p>
	<p style="color:rgb(0,0,255); text-align:center;">blue paragraph => center with style</p>
	<table>
		<tbody>
			<tr>
                <td><mark>column 1</mark></td>
                <td>column 2</td>
				<td><mark>column 3</mark></td>
				<td>column 4</td>
				<td>column 4</td>
			</tr>
			<tr>
				<td>content 1</td>
				<td>content 2<br></td>
				<td>content 3<br></td>
				<td>content 4<br></td>
				<td>column 4</td>
			</tr>
		</tbody>
	</table>
</div>
        `;

        const additionalCSS = `
          <style>
            /* Reduce spacing between <p> tags */
            p {
              margin-top: 0; /* Set top margin to 0 */
                margin-bottom: 0; /* Set bottom margin to 0 */
                padding-top: 0; /* Set top padding to 0 */
                padding-bottom: 5px; /* Set bottom padding to 0 */
                line-height: 15px; /* Ensure line height is minimal */
            }

          </style>
        `;

        const finalHTML = `<html><head>${additionalCSS}</head><body>${htmlContent}</body></html>`;

        const des = `<p>TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;DUPLEX POLYESTER, SOFT EYE.</p><p>WIDTH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;60 mm</p><p>EWL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;2.0 m</p><p>COLOUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;GREEN</p><p>YOM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;DECEMBER 2021</p><p>DATE OF INITIAL USE : FEBRUARY 2022</p><p>FOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;7:1</p><p>&nbsp;</p><p>Date of Break Test Certificate: BVI.DOA.22.IVS.223A.80.WS.02/211345</p><p>DATE&nbsp;&nbsp;: 01/02/2022</p><p>&nbsp;CoC : TL213807/0202/01 / DATED : 22/12/2021</p><p>&nbsp;</p><p><strong><u>NOTE:</u></strong>&nbsp;&nbsp;1. CAN BE USE IN QATAR ENERGY OPERATIONAL AREA UP TO 02/02/2026.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. SHALL NOT BE USED FOR OFFSHORE </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRANSPORTATION.</p>`
       const rtfContent = htmlToRtf.convertHtmlToRtf(des);
       console.log(rtfContent)


        const modifiedRtfContent ="{\\rtf1\\ansi\\deff0\\paperw11909\\paperh16834\\margl600\\margr600{\\fonttbl{\\f0\\fnil\\fcharset0 Calibri;}{\\f1\\fnil\\fcharset2 Symbol;}{\\f2\\fnil\\fcharset2 Arial Narrow;}{\\f3\\fnil\\fcharset2 Arial;}{\\f4\\fnil\\fcharset2 Times New Roman;}}{\\colortbl;\\red255\\green0\\blue0;\\red51\\green51\\blue51;\\red70\\green69\\blue129;\\red255\\green255\\blue0;\\red0\\green0\\blue139}"+
        "{\\header \\pard\\qr\\plain\\f0\\fs20 Page \\chpgn  of {\\field{\\*\\fldinst  NUMPAGES }} \\par}"+
        "{\\pard \\brdrb \\brdrs\\brdrw100\\brsp20\\brdrcf3 {\\fs4\\~}\\sb200\\sa600\\par \\pard}"+
        "{\\qc\\fs41\\b\\f4 CERTIFICATE \\par}"+
        "{\\qc\\fs30\\b\\cf1\\f4 of Test and Through Examination of Lifting Gear \\par}"+
        "\\par"+
        "\\trowd\\trgaph10\\cellx4200\\cellx6300\\cellx10700"+
        "{\\pard\\intbl\\b\\ql\\f2\\fs20 Certificate No.:  dfr/yyyyyki/23/RR\\sa100\\cell}"+
        "{\\pard\\intbl\\b\\ql\\f2\\fs20  Project No.:  5457\\sa100\\cell}"+
        "{\\pard\\intbl\\b\\ql\\f2\\fs20  Date of Inspection: 10/06/2023\\sa100\\cell}"+
        "\\row"+
        "\\trowd\\trgaph10\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw35\\brdrs\\clbrdrb\\brdrw15\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx5350\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw15\\brdrs\\clbrdrr\\brdrw35\\brdrs\\cellx10700"+
        "{\\pard\\intbl\\b\\ql\\f2\\fs20 Name & Address of the Owner: \\par\\qc TRAGS\\line DOHA - QATAR\\sa100\\cell}"+
         "{\\pard\\intbl\\b\\ql\\f2\\fs20 Place of Inspection: \\par\\qc TRAGS FABRICATION WORKSHOP\\sa100\\cell}"+
         "\\row"+
         "\\trowd\\trgaph10\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw35\\brdrs\\clbrdrb\\brdrw15\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx5350\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw15\\brdrs\\clbrdrr\\brdrw35\\brdrs\\cellx10700"+
         "{\\pard\\intbl\\b\\ql\\f2\\fs20 Maker or Supplier: \\par\\qc LIFTINGEAR\\sa100\\cell}"+
         "{\\pard\\intbl\\b\\ql\\f2\\fs20 Standard: \\par\\qc BS EN 149:2008  / QP-PAI-STD-005-REV-00\\sa100\\cell}"+
         "\\row"+
        "\\trowd\\trgaph10\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw35\\brdrs\\clbrdrb\\brdrw30\\brdrs\\clbrdrr\\brdrw15\\brdrs\\clvertalc\\cellx1900\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\clvertalc\\cellx2500\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\clvertalc\\cellx7800\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\clvertalc\\cellx9100\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw35\\brdrs\\clvertalc\\cellx10700"+
        "{\\pard\\intbl\\qc\\b\\f2\\fs20\\sa100\\sb100 ID No.: \\cell}{\\pard\\intbl\\b\\qc\\f2\\fs20\\sa100\\sb100 Qty. \\cell}{\\pard\\intbl\\qc\\b\\f2\\fs20\\sa100\\sb100 Description\\cell}{\\pard\\intbl\\qc\\b\\f2\\fs20\\sa100\\sb100 Proof Load Applied\\cell}{\\pard\\intbl\\qc\\b\\f2\\fs20\\sa100\\sb100 SWL\\cell}\\row"+
        "\\trowd\\trgaph10\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw35\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\clvertalc\\cellx1900\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\clvertalc\\cellx2500\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx7800\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\clvertalc\\cellx9100\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw35\\brdrs\\clvertalc\\cellx10700"+
        "{\\pard\\intbl\\qc\\f2\\fs20 ID No.: \\cell}"+
        "{\\pard\\intbl\\qc\\f2\\fs20 Qty. \\cell}"+
        "{\\pard\\intbl\\qc\\f2\\fs20 \\ul\\b\\i\\sb200\\sa200 FLAT WEBBING SLING \\par\\plain\\ql\\fs20\\f2\\sb0\\sa0 {\\pard TYPE\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~:\\~DUPLEX POLYESTER, SOFT EYE.\\sb20\\par}{\\pard WIDTH\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~:\\~60 mm\\sb20\\par}{\\pard EWL\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~:\\~2.0 m\\sb20\\par}{\\pard COLOUR\\~\\~\\~\\~\\~\\~\\~\\~:\\~GREEN\\sb20\\par}{\\pard YOM\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~:\\~DECEMBER 2021\\sb20\\par}{\\pard DATE OF INITIAL USE : FEBRUARY 2022\\sb20\\par}{\\pard FOS\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~:\\~7:1\\sb20\\par}{\\pard \\~\\sb20\\par}{\\pard Date of Break Test Certificate: BVI.DOA.22.IVS.223A.80.WS.02/211345\\sb20\\par}{\\pard DATE\\~\\~: 01/02/2022\\sb20\\par}{\\pard \\~CoC : TL213807/0202/01 / DATED : 22/12/2021\\sb20\\par}{\\pard \\~\\sb20\\par}{\\pard{\\b{\\ul NOTE:}} \\~\\~1. CAN BE USE IN QATAR ENERGY OPERATIONAL AREA UP TO 02/02/2026.\\sb20\\par}{\\pard \\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~2. SHALL NOT BE USED FOR OFFSHORE\\sb20\\par}{\\pard \\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~\\~TRANSPORTATION.\\sb20\\par}\\cell}"+
        "{\\pard\\intbl\\qc\\f2\\fs20 APPLIED TEST LOAD\\cell}"+
        "{\\pard\\intbl\\qc\\f2\\fs22 2.0 \\par\\fs18(STRAIGHT)\\cell}\\row"+
        "\\trowd\\trgaph10\\brsp20\\cellx4100{\\pard\\intbl\\qc\\b\\f2\\fs15   \\cell}\\row"+
        "\\trowd\\trgaph10\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw35\\brdrs\\clbrdrb\\brdrw15\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx2675\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw15\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx5350\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw15\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx8025\\clbrdrt\\brdrw35\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw15\\brdrs\\clbrdrr\\brdrw35\\brdrs\\cellx10700"+
        "{\\pard\\intbl\\qc\\b\\f2\\fs20 Date of Last Examination \\sa100\\sb100\\cell}{\\pard\\intbl\\b\\qc\\f2\\fs20 Date of Next Examination \\sa100\\sb100\\cell}{\\pard\\intbl\\qc\\b\\f2\\fs20 Date of Last Proof Load Test \\sa100\\sb100\\cell}{\\pard\\intbl\\qc\\b\\f2\\fs20 Date of Next Proof Load Test \\sa100\\sb100\\cell}\\row"+
        "\\trowd\\trgaph10\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw35\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx2675\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx5350\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw15\\brdrs\\cellx8025\\clbrdrt\\brdrw15\\brdrs\\clbrdrl\\brdrw15\\brdrs\\clbrdrb\\brdrw35\\brdrs\\clbrdrr\\brdrw35\\brdrs\\cellx10700"+
        "{\\pard\\intbl\\qc\\f2\\fs20 11/12/2022 \\line ABS\\sa30\\sb30\\cell}"+
        "{\\pard\\intbl\\qc\\f2\\fs20 09/12/2023\\sa30\\sb30\\cell}"+
        "{\\pard\\intbl\\qc\\f2\\fs20 NOT APPLICABLE\\sa30\\sb30\\cell}"+
        "{\\pard\\intbl\\qc\\f2\\fs20 NOT APPLICABLE\\sa30\\sb30\\cell}\\row"+
        "\\trowd\\trgaph10\\brsp20\\cellx4100{\\pard\\intbl\\qc\\b\\f2\\fs15   \\cell}\\row"+

        "\\trowd\\trgaph10\\cellx5350\\cellx10700"+
        "{\\pard\\intbl\\ql\\f2\\fs20\\sb300 Authorized Name:    \\b RAHUL RAO \\par                      _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\\sb0\\sa400\\cell}"+
        "{\\pard\\intbl\\ql\\f2\\fs20\\sb300                Surveyor\\rquote s Name:   \\b XYZZZZ  \\par                                   _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\\sb0\\sa400\\cell}"+
        "\\row"+
        "\\trowd\\trgaph10\\cellx5350\\cellx10700"+
        "{\\pard\\intbl\\ql\\f2\\fs20 Authorized Signature:\\par                       _____________________________\\sb0\\sa100\\cell}"+
        "{\\pard\\intbl\\ql\\f2\\fs20                Surveyor\\rquote s Signature:\\par                                      ____________________________\\sb0\\sa100\\cell}"+
        "\\row"+
        "\\par"+
        "{\\pard\\qj\\sb0\\fs20\\f3\\b THIS IS TO CERTIFY THAT \\b0 the above competent surveyor thoroughly examined the lifting equipment in the above-mentioned place as per Qatar Energy Corporate Standard for Lifting Equipment and Operations. The liabilities and insurance are as per ABS Group Inc. General Conditions of Services. \\par}"+
        "}"

//        const modifiedRtfContent1 = modifiedRtfContent.replace('{\\rtf1\\ansi\\deff0{\\fonttbl {\\f0\\fnil\\fcharset0 Calibri;}{\\f1\\fnil\\fcharset2 Symbol;}}','')
//         const modifiedRtfContent1 = modifiedRtfContent.replace('\\rtf1\\ansi\\ansicpg1252\\deff0\\nouicompat','')

       console.log(rtfContent)
//        console.log(modifiedRtfContent)

       const blob = new Blob([modifiedRtfContent], {type: "application/rtf;charset=utf-8"});
       const url=window.URL.createObjectURL(blob);
        const a = document.createElement('a');
                          a.style.display = 'none';
                          a.href = url;
                          a.download = 'rtffile.rtf';

                          // Trigger the download
                          document.body.appendChild(a);
                          a.click();

                          // Clean up the URL
                          window.URL.revokeObjectURL(url);
    }

  @Input() pdfDataUrl: string;

  downloadPdf() {
      // You can implement the download logic here if needed
      // For example, you can create an anchor element and trigger a click event to download the PDF.
      const a = document.createElement('a');
      a.href = this.pdfDataUrl;
      a.download = 'example.pdf';
      a.click();
    }
}
