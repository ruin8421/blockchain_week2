# Ethereum Block Data Retrieval

이 프로젝트는 Infura를 사용하여 이더리움 최신 블록 정보(번호, 트랜잭션 수)를 가져오는 두 가지 방식을 비교합니다.

## 실습 내용
1. **JSON-RPC:** Axios를 이용해 노드에 직접 요청을 보내는 방식
2. **ethers.js:** 블록체인 전용 라이브러리를 사용하는 방식

## 설치 및 실행 방법
1. 패키지 설치: `npm install`
2. 환경변수 설정: `.env` 파일에 `INFURA_URL=내_API_주소` 입력
3. 실행: `node json_rpc.js` 또는 `node ethers_app.js`