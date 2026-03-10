require('dotenv').config();
const { JsonRpcProvider } = require('ethers');

async function getBlockWithEthers() {
  // Infura URL을 사용하여 프로바이더(연결망) 생성
  const provider = new JsonRpcProvider(process.env.INFURA_URL);

  try {
    // ethers.js는 16진수 변환 등을 내부적으로 알아서 처리해줍니다.
    const block = await provider.getBlock('latest');
    
    console.log("--- Approach #4: ethers.js ---");
    console.log(`최신 블록 번호: ${block.number}`);
    console.log(`트랜잭션 수: ${block.transactions.length}`);
  } catch (error) {
    console.error("오류 발생:", error.message);
  }
}

getBlockWithEthers();