const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
 const fetch = require('node-fetch');
  const axiosProxy = require('axios-https-proxy-fix');
const { parseString } = require('xml2js');

const proxyConfig = { host: '192.168.119.111', port: 80 };

async function decodeBase64ToFile(base64String) {
const path = require('path');
try{
const buffer = Buffer.from(base64String, 'base64');
  const base64Data = base64String.replace(/^data:application\/pdf;base64,/, "");
  const buffers = Buffer.from(base64Data, "base64");
// Now you can use the buffer as needed
const folderpath="upload"
    const currentWorkingDirectory = process.cwd();
console.log(currentWorkingDirectory,"sdsdsdsdsdsdsdsdsd")

    // Construct the full output file path
    const outputFilePath = path.join(currentWorkingDirectory, 'outputFileName.pdf');
// fs.writeFileSync(outputFilePath ,buffers);

  return {
    buffer: buffers,
filename:"vikashh"
 
  };
}catch(err)
{console.log(err)}

}

function getCurrentIndianFiscalYear() {
  const currentDate = new Date();
  const fiscalYear = currentDate.getMonth() >= 3 ? currentDate.getFullYear() : currentDate.getFullYear() - 1;
  return fiscalYear;
}


async function uploadPFWithdrawlDocument(record, responce) {
    try {
      const fileInfo = await decodeBase64ToFile(record.PANCARD_FILENAME);
  var responce=await connectwithomnidocs()
     console.log(responce.NGOConnectCabinet_Output.UserDBId,"ljflkjdlkfjdlkfjdflkjlkj");
      const url = 'http://uatcorpomnidocs.icicibankltd.com:7801/omnidocs/servlet/addBlkDocument';
      const customIndianFiscalYear = await getCurrentIndianFiscalYear();
      const customFolderName = `FY${customIndianFiscalYear}_${customIndianFiscalYear + 1}`;
      const formData = new FormData();
      console.log(record.EMPL_ID, customFolderName);
    const rp = require('request-promise');
        const options = {
          uri:url,
          method: 'POST',
          formData: {
        
            F: {
              value: fileInfo.buffer,
              options: {
                filename: "vikash",
                contentType: null
              },
            },
     RootFolderPath: 'procdoc/ALUMNIA/PFONLINE/FY2021_2022', // Add RootFolderPath
            DocumentDataDefList: '<DocDataDefinition><DataClassDoc>ALUMNIA_DOCUMENT</DataClassDoc><DocField><DocIndexName>EmpID</DocIndexName><DocIndexId>617</DocIndexId><DocIndexValue>90032244</DocIndexValue><DocIndexType>S</DocIndexType></DocField></DocDataDefinition>',
            FolderDataDefList: '<DataDefinition><DataClassNamFold>ALUMNIA_FOLDER</DataClassNamFold><Field><IndexName>EmpID</IndexName><IndexId>615</IndexId><IndexValue>90032244</IndexValue><IndexType>S</IndexType></Field></DataDefinition>',
            CabinetName: 'procdoc',
            UserDBId:'-1815783391' , // Typo: responce should be response
            jtsIpAddress: '10.50.75.21',
            jtsPort: '7801',
            DocumentName: 'APPFORM',
            VersionFlag: 'N',
          
          },
         proxy: 'http://192.168.119.111:80',
          json: true,
        };
  console.log(options ,"kjsdlsdlsdlksdljlkjjl")
        let response = await rp(options);
        console.log(response);
    } catch (error) {
      console.error('Error in fetch request:', error);
    }
  } 
 
async function uploadPFTransferDocument() {
  const customIndianFiscalYear = await getCurrentIndianFiscalYear();
  const customFolderName = `FY${customIndianFiscalYear}_${customIndianFiscalYear + 1}`;
  try {
    const payload = new FormData();
    const url = 'http://uatcorpomnidocs.icicibankltd.com:7801/omnidocs/servlet/addBlkDocument';
    payload.append('PF_Transfer_FY_YearF', '656');
    payload.append('PF_Transfer_FY_Year', '658');
    payload.append('PF_Transfer_EmpIDF', '655');
    payload.append('PF_Transfer_EmpID', '657');
    payload.append('PF_Transfer_RootFolderPath', 'PROCDOC/ALUMNIA_TransferOut');
    payload.append('PF_Transfer_CabinetName', 'PROCDOC');
    payload.append('PF_Transfer_VolumeIndex', '8');
    payload.append('PF_Transfer_OmniDocUser', 'TransferUser');
    payload.append('UploadOmniDocUrlDBID', 'DBID');
    payload.append('FolderName', customFolderName);
    payload.append('F', 'SDsdsdsd');
    const response = await axios.post(url, payload, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error in axios.post request:', error);
  }
}
const connectwithomnidocs=async()=>{

  const url = 'http://uatcorpomnidocs.icicibankltd.com:7801//omnidocs/servlet/GenericCallBroker';

  const inputXML =
    '<NGOConnectCabinet_Input><Option>NGOConnectCabinet</Option><CabinetName>procdoc</CabinetName><UserName>ALUMNIA_USER</UserName><UserPassword>Admin@12345</UserPassword><CurrentDateTime></CurrentDateTime><UserExist>N</UserExist><MainGroupIndex>0</MainGroupIndex><UserType>S</UserType><Locale>en-us</Locale><ListSysFolder>N</ListSysFolder></NGOConnectCabinet_Input>';
  const JTSIp = '10.50.75.21';
  const JTSPort = '7801';
  const headers = {
    'Content-Type': 'application/json',
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  };
  const payload = {
    InputXML: inputXML,
    JTSIp: JTSIp,
    JTSPort: JTSPort,
    NGOConnectCabinet_Input: {
      Option: 'NGOConnectCabinet',
      CabinetName: 'procdoc',
      UserName: 'ALUMNIA_USER',
      UserPassword: 'Admin@12345',
      CurrentDateTime: '',
      UserExist: 'N',
      MainGroupIndex: '0',
      UserType: 'S',
      Locale: 'en-us',
      ListSysFolder: 'N',
    },
  };
 
    try {
      const response = await axiosProxy.get(url, { params: payload, headers: headers, proxy: proxyConfig });
      const parsedResult = await new Promise((resolve, reject) => {
        parseString(response.data, { explicitArray: false, ignoreAttrs: true }, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
      return parsedResult
    } catch (error) {
      console.error('Error in axios request:', error);
    }
 
}
 
module.exports={
  uploadPFWithdrawlDocument,
  uploadPFTransferDocument,
  connectwithomnidocs
}






