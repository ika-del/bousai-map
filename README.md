# 🛡️ 防災マップ | Bousai Map

不動産情報ライブラリAPI × 20レイヤー防災マップ

## デプロイ手順

### 1. GitHubにプッシュ
```bash
cd bousai-map
git init
git add .
git commit -m "防災マップ"
git branch -M main
git remote add origin https://github.com/ika-del/bousai-map.git
git push -u origin main
```

### 2. Vercelでデプロイ
1. https://vercel.com → Add New Project
2. ika-del/bousai-map を選択
3. Framework Preset を「Next.js」に設定
4. Environment Variables に追加:
   - `REINFOLIB_API_KEY` = （不動産情報ライブラリAPIで取得したキー）
5. Deploy
