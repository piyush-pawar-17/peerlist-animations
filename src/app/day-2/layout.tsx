import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day 2 - Dynamic Status Indicator | Peerlist Animation Challenges",
  description: "An elegant and informative status indicator",
};

const Day2Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default Day2Layout;
