"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" rounded-full">
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: 35.6895, lng: 139.6917 }, // Tokyo
            end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney
            end: { lat: 1.3521, lng: 103.8198 }, // Singapore
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris
            end: { lat: 40.7128, lng: -74.006 }, // New York
          },
          {
            start: { lat: 55.7558, lng: 37.6173 }, // Moscow
            end: { lat: 39.9042, lng: 116.4074 }, // Beijing
          },
          {
            start: { lat: 19.4326, lng: -99.1332 }, // Mexico City
            end: { lat: 4.711, lng: -74.0721 }, // Bogotá
          },
          {
            start: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
            end: { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
          },
          {
            start: { lat: 52.3676, lng: 4.9041 }, // Amsterdam
            end: { lat: 41.9028, lng: 12.4964 }, // Rome
          },
          {
            start: { lat: 25.276987, lng: 55.296249 }, // Dubai
            end: { lat: 35.6895, lng: 139.6917 }, // Tokyo
          },
          {
            start: { lat: 31.2304, lng: 121.4737 }, // Shanghai
            end: { lat: -37.8136, lng: 144.9631 }, // Melbourne
          },
        ]}
      />
    </div>
  );
}
