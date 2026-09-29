"use client";

import { useState } from "react";

export default function LocationPage() {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setMessage("Location access is not available in this browser.");
      return;
    }

    setMessage("Finding your location...");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setMessage(`Location found (${coords.latitude.toFixed(3)}, ${coords.longitude.toFixed(3)}).`),
      () => setMessage("We couldn't access your location. Enter your address instead."),
      { enableHighAccuracy: false, timeout: 10000 },
    );
  }

  function continueWithAddress(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(address.trim() ? `Delivery location set to ${address.trim()}.` : "Enter an address to continue.");
  }

  return (
    <main className="location-screen">
      <section className="location-panel" aria-labelledby="location-title">
        <p className="location-logo">MEDI<span>NOW</span></p>
        <svg className="location-pin-icon" viewBox="0 0 54 64" fill="none" aria-hidden="true">
          <path d="M27 2C13.2 2 2 13.2 2 27c0 18.7 25 35 25 35s25-16.3 25-35C52 13.2 40.8 2 27 2Z" stroke="currentColor" strokeWidth="3" />
          <circle cx="27" cy="26" r="8" stroke="currentColor" strokeWidth="3" />
        </svg>
        <h1 id="location-title">Where should we deliver?</h1>
        <p className="location-copy">Set your location to find nearby pharmacies and delivery options.</p>
        <button className="location-action secondary" type="button" onClick={useCurrentLocation}>
          <span aria-hidden="true">⌖</span> Use my current location
        </button>
        <form onSubmit={continueWithAddress}>
          <label className="location-label" htmlFor="delivery-address">Or enter your address</label>
          <input
            className="location-input"
            id="delivery-address"
            autoComplete="street-address"
            placeholder="Street, city, or postal code"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <button className="location-action" type="submit">Continue</button>
        </form>
        <p className="location-message" role="status">{message}</p>
      </section>
    </main>
  );
}