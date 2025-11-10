import "./App.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src="https://prompt2ui.earlywave.in/"
        allow="cross-origin-isolated"
        style={{ width: "100%", height: "100%" }}
      />
      <iframe
        src="https://mindmap-learning.ccbp.in/mindmap?url=https%3A%2F%2Fnkb-backend-ccbp-media-static.s3.amazonaws.com%2Fccbp_prod%2Fmedia%2Ftranscripts%2Fbaab8c69-b6fb-43e9-97fe-94128b0de480_transcript.srt%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIARTUZIEISD4RM2NFG%252F20251110%252Fap-south-1%252Fs3%252Faws4_request%26X-Amz-Date%3D20251110T111938Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D4eae61b7ba927a699f5dfec19f32e4c84acff5ea2d94204b160d639311d0ad5d"
        allow="cross-origin-isolated"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default App;
