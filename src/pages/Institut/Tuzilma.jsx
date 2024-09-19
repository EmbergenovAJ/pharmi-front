import { Document, Page } from 'react-pdf';
import {Viewer, Worker} from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

import pdfURL from './tuzilma.pdf'

const Tuzilma = () => {



    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div     style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
        }}>
            <Document file={pdfURL}>
                <Page pageNumber={1} />
            </Document>
            {/*<iframe src='tuzilma.pdf' width='100%' height='500px' />*/}
            <Viewer  fileUrl="./tuzilma_compressed.pdf" />;

        </div>
        </Worker>
    );
};

export default Tuzilma;