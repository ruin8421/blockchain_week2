require('dotenv').config();
const axios = require('axios');

async function getBlockWithJsonRpc() {
  const payload = {
    jsonrpc: "2.0",
    method: "eth_getBlockByNumber",
    params: ["latest", false],
    id: 1
  };

  try {
    const response = await axios.post(process.env.INFURA_URL, payload);
    const block = response.data.result;
    
    // 블록 번호(16진수)를 10진수로 변환
    const blockNumber = parseInt(block.number, 16);
    const txCount = block.transactions.length;

    console.log("--- Approach #3: Raw JSON-RPC ---");
    console.log(`최신 블록 번호: ${blockNumber}`);
    console.log(`트랜잭션 수: ${txCount}`);
  } catch (error) {
    console.error("오류 발생:", error.message);
  }
}

getBlockWithJsonRpc();