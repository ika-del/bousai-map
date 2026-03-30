export const metadata = {
  title: "防災マップ | Be-kan 備館",
  description: "不動産情報ライブラリAPI 20レイヤー防災マップ",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
