import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function Session(props) {
  const router = useRouter();
  const { sessionId } = router.query;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [loading, setLoading] = useState(true);
  const [roomUrl, setRoomUrl] = useState("");

  const [error, showError] = useState("");
  const wherebyRef = useRef();

  //Meeting Id has to be the booking id, not the session id
  // sample meeting id: 624814e0126a1bfc2671ec7a
  useEffect(() => {
    axios
      .get(`${API_URL}/session/${sessionId}/start`)
      .then((res) => {
        setRoomUrl(`${res.data.data.session_link}?roomIntegrations=on`);
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        showError(errorMessage);
        setLoading(false);
      });
  }, [API_URL, sessionId]);

  useEffect(() => {
    const wherebyDiv = document.getElementById("whereby");
    wherebyDiv &&
      wherebyDiv.addEventListener("leave", () => {
        console.log("leaves");
      });
  });

  return (
    <>
      {!loading ? (
        <>
          {roomUrl && (
            <iframe
              id="whereby"
              className="h-screen w-full"
              src={roomUrl}
              ref={wherebyRef}
              allow="camera; microphone; fullscreen; speaker; display-capture"
            ></iframe>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}

      {error && <div>{error || "oops"}</div>}
    </>
  );
}
