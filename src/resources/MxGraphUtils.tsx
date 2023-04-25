// // This is a typescript file that can be run with node or similar
// // to parse mxGraph source files (typically in xml format) and output
// // to a variety of different formats.
//
// import * as mxgraph from "mxgraph";
// const mxUtils = mxgraph.mxUtils;
// const mxCodec = mxgraph.mxCodec;
// const mxClient = mxgraph.mxClient;
// import * as fs from "fs";
//
// /**
//  * A class containing the utilities and functionality needed
//  * to perform the parsing, input, and output on mxGraph-like data and files.
//  */
// class MxGraphUtils {
//
//     /**
//      * Load an XML file from the given file path (not url or web location, but on disk)
//      *
//      * @param path the path to the XML file
//      * @returns the XML file as a string
//      * @throws an error if the file cannot be found
//      */
//     loadXmlFile(path: string): string {
//         // Typescript node implementation of loading a file
//         // doesn't use require or the fs module
//
//         // Read the file
//         const file = fs.readFileSync(path, 'utf8');
//         return "";
//     }
//
//
//     /**
//     * Parses the given XML file and returns the mxGraph object
//     * @param xmlString the XML file to parse
//     * @returns the mxGraph object
//     */
//     parseXmlString(xmlString: string): any {
//         // Parses the given XML file and returns the mxGraph object
//         const xml = mxUtils.parseXml(xmlString);
//         const codec = new mxCodec(xml);
//         return codec.decode(xml.documentElement);
//     }
// }