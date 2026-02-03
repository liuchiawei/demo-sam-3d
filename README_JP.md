# Meta SAM 3D デモウェブサイト

企業顧客向けの Meta SAM（Segment Anything Model）デモウェブサイト。Three.js/React Three Fiber を使用した 3D インタラクティブシーンで AI 画像分割サービスを展示します。

## 📋 機能

- **3D インタラクティブシーン**: demo_scene.png から抽出した GLB モデルを表示
- **動画デモ**: SAM の機能を示す 3 つの動画
  - テキストプロンプト駆動セグメンテーション
  - ヒートマップ分析
  - 背景分離
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **パフォーマンス最適化**: Turbopack、画像最適化、コード分割
- **完全日本語対応**: すべてのUI文字列が日本語

## 🛠️ 技術スタック

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, TypeScript 5
- **3D**: Three.js, React Three Fiber, Drei
- **アニメーション**: Motion (Framer Motion)
- **スタイリング**: Tailwind CSS v4
- **コンポーネント**: shadcn/ui

## 📁 プロジェクト構造

```
├── app/
│   ├── page.tsx              # メインページ
│   ├── layout.tsx            # ルートレイアウト
│   └── globals.css           # グローバルスタイル
├── components/
│   ├── sections/            # ページセクション
│   │   ├── HeroSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── IndustrySection.tsx
│   │   ├── MetricsSection.tsx
│   │   └── CTASection.tsx
│   ├── 3d/                  # 3Dコンポーネント
│   │   └── SAMScene.tsx
│   ├── video/               # 動画プレイヤー
│   │   ├── SAMVideoPlayer.tsx
│   │   └── VideoModal.tsx
│   ├── capabilities/        # 機能カード
│   │   └── CapabilityCard.tsx
│   └── metrics/             # 指標コンポーネント
│       └── MetricCounter.tsx
├── lib/
│   ├── messages.ts          # 日本語文案
│   ├── constants.ts         # 定数
│   ├── animations.ts        # アニメーション設定
│   └── three-helpers.ts     # Three.js ヘルパー関数
└── public/
    ├── models/              # 3D モデル (GLB)
    │   ├── object_0_worker_1.glb
    │   ├── object_1_bag.glb
    │   └── object_2_worker_2.glb
    └── videos/              # デモ動画
        ├── demo_scene.png
        ├── sam_demo_0203_01.mp4
        ├── sam_demo_0203_02_heatmap.mp4
        └── sam_demo_0203_03_pixelate_background.mp4
```

## 🚀 セットアップ

### 前提条件

- Node.js 18.18 以上
- pnpm 8.0 以上

### インストール

```bash
# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

開発サーバーが [http://localhost:3000](http://localhost:3000) で起動します。

### ビルド

```bash
# 本番用ビルド
pnpm build

# 本番サーバーを起動
pnpm start
```

## 🎨 デザインガイドライン

### 使用する（企業プロフェッショナルスタイル）

- ✅ シンプルな黒白グレーのメインカラー
- ✅ ブランドグリーン（強調に使用）
- ✅ 実際の写真と動画
- ✅ 大きな余白、8px グリッド整列
- ✅ プロフェッショナルフォント（Geist Sans）
- ✅ 正確なデータ可視化

### 避ける（一般的な AI スタイル）

- ❌ 紫青グラデーション背景
- ❌ 過度な丸角（> 16px）
- ❌ 浮遊粒子効果
- ❌ ネオン発光
- ❌ 抽象幾何学図形

## 📝 文案の編集

すべての UI 文字列は `lib/messages.ts` で管理されています：

```typescript
export const messages = {
  hero: {
    title: "あらゆる画像を瞬時に理解",
    subtitle: "AIが意図を理解する画像セグメンテーション",
    // ...
  },
  // ...
};
```

## 🔧 設定

### 定数の変更

`lib/constants.ts` でパス、メトリック、色などを変更できます：

```typescript
export const PATHS = {
  models: {
    worker1: "/models/object_0_worker_1.glb",
    // ...
  },
  // ...
};

export const METRICS = {
  responseTime: 30, // ms
  accuracy: 95, // %
  // ...
};
```

### アニメーションの調整

`lib/animations.ts` でモーションアニメーションを調整できます：

```typescript
export const TRANSITIONS = {
  fast: { duration: 0.2 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
};
```

## 📊 パフォーマンス目標

- ✅ LCP（最大コンテンツペイント）< 2.5s
- ✅ FID（初回入力遅延）< 100ms
- ✅ 3D シーン FPS ≥ 30（デスクトップ）
- ✅ ビデオファイル < 5MB（各）
- ✅ 初回 JavaScript < 200KB（gzip 後）

## 🎯 主な特徴

1. **2D→3D 変換ナラティブ**: SAM が平面画像（demo_scene.png）から 3D オブジェクト（GLB モデル）を抽出する能力を直感的に展示
2. **3D インタラクティブシーン**: React Three Fiber + 実際の GLB モデル、背景に元画像を重ねる
3. **動画とモデルの関連付け**: ヒートマップ動画は同じ 3D オブジェクトを使用し、前後の呼応を形成
4. **自動動画再生**: IntersectionObserver でパフォーマンスを最適化
5. **レスポンシブ 3D**: モバイル端末での適応的な劣化
6. **スクロール駆動アニメーション**: Motion ライブラリでスムーズな体験を実現
7. **企業級デザイン**: 一般的な AI スタイルを避け、プロフェッショナルでシンプル

## 📚 参考資料

- [Next.js ドキュメント](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Three.js](https://threejs.org/)
- [Motion (Framer Motion)](https://motion.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## 📄 ライセンス

© 2024 SAM Demo. All rights reserved.
