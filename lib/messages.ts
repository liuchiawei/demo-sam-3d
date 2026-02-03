/**
 * 日语文案配置文件
 * すべてのUI文字列をここで管理
 */

export const messages = {
  hero: {
    title: "AICE x SAM",
    subtitle: "あらゆる映像を瞬時に理解、分析、編集",
    description:
      "Meta SAMは、自然言語やクリックだけで、映像内の任意のオブジェクトを正確に分割します",
    cta: "デモを見る",
    scrollHint: "下にスクロール",
  },

  problem: {
    title: "現在の課題",
    subtitle: "従来の画像処理の限界",
    pain1: {
      title: "手作業による時間のロス",
      description: "画像の手動処理には数時間かかる",
    },
    pain2: {
      title: "高いコスト",
      description: "専門スタッフとツールに大きな投資が必要",
    },
    pain3: {
      title: "精度の問題",
      description: "人的ミスによる不正確な結果",
    },
  },

  capabilities: {
    title: "SAMの主要機能",
    subtitle: "最先端のAI技術で画像処理を革新",
    extraction: {
      title: "3Dオブジェクト抽出",
      description: "2D画像から独立した3Dオブジェクトを識別・抽出",
      detail:
        "平面画像から空間情報を理解し、個別のオブジェクトとして抽出します",
    },
    visualEffect: {
      title: "ビジュアルエフェクト",
      description: "AIで選択した部分に様々なエフェクトを適用",
      detail:
        "選択したオブジェクトにフィルターやエフェクトを適用して表現を拡張できます",
    },
    background: {
      title: "背景分離",
      description: "前景を正確に分離し、プライバシーを保護",
      detail:
        "オブジェクトと背景を精密に分割し、ピクセル化やぼかし効果を適用できます",
    },
    mosaic: {
      title: "モザイク処理",
      description: "センシティブなオブジェクトを選択してプライバシーを保護",
      detail:
        "選択した領域にモザイクやぼかしを適用し、個人情報や機密情報を保護できます",
    },
    tracking: {
      title: "軌跡追跡",
      description: "特定のオブジェクトの移動経路を追跡",
      detail:
        "選択したオブジェクトの動きをリアルタイムで追跡し、移動パターンを視覚化できます",
    },
    scene3d: {
      title: "3Dシーン生成",
      description: "抽出したオブジェクトから3D空間を構築",
      detail:
        "分割されたオブジェクトを活用し、インタラクティブな3D環境を自動生成します",
    },
  },

  industries: {
    title: "業界別ソリューション",
    subtitle: "あらゆる業界で活用できるSAM技術",
    manufacturing: {
      title: "製造業",
      description: "品質検査の自動化",
      detail: "生産ラインでの欠陥検出と品質管理を自動化",
    },
    retail: {
      title: "小売業",
      description: "客流分析と在庫管理",
      detail: "店舗内の商品識別と自動在庫チェック",
    },
    medical: {
      title: "医療",
      description: "医療画像のセグメンテーション",
      detail: "CT/MRI画像から組織や腫瘍を正確に抽出",
    },
    security: {
      title: "セキュリティ",
      description: "異常検知と追跡",
      detail: "リアルタイムでの人物追跡と異常行動検出",
    },
  },

  metrics: {
    title: "技術的優位性",
    subtitle: "業界をリードするパフォーマンス",
    speed: {
      value: "30",
      unit: "ms",
      label: "応答時間",
      description: "超高速処理",
    },
    accuracy: {
      value: "95",
      unit: "%",
      label: "精度",
      description: "高精度セグメンテーション",
    },
    categories: {
      value: "1000",
      unit: "+",
      label: "オブジェクトカテゴリ",
      description: "幅広い対応範囲",
    },
    fps: {
      value: "30",
      unit: "FPS",
      label: "リアルタイム処理",
      description: "ビデオ解析対応",
    },
    comparison: {
      title: "従来手法との比較",
      feature: "機能",
      traditional: "従来の方法",
      sam: "SAM モデル",
      row1: {
        feature: "処理方法",
        traditional: "手動アノテーション",
        sam: "AI自動分割",
      },
      row2: {
        feature: "処理時間",
        traditional: "数時間",
        sam: "30ミリ秒",
      },
      row3: {
        feature: "学習データ",
        traditional: "大量の教師データが必要",
        sam: "ゼロショット学習",
      },
      row4: {
        feature: "精度",
        traditional: "70-80%",
        sam: "95%+",
      },
    },
  },

  cta: {
    title: "SAMを今すぐ体験",
    subtitle: "貴社のビジネスに最適なソリューションをご提案します",
    description:
      "お気軽にお問い合わせください。専門チームが詳しくご説明いたします。",
    form: {
      name: {
        label: "名前",
        placeholder: "山田太郎",
      },
      email: {
        label: "メールアドレス",
        placeholder: "taro@example.com",
      },
      company: {
        label: "会社名",
        placeholder: "株式会社〇〇",
      },
      usecase: {
        label: "ユースケース",
        placeholder: "SAMの活用方法をお聞かせください",
      },
      submit: "お問い合わせ",
      success: "送信完了しました！",
      error: "エラーが発生しました。もう一度お試しください。",
    },
    resources: {
      title: "その他のリソース",
      whitepaper: "ホワイトペーパーをダウンロード",
      documentation: "技術ドキュメント",
      demo: "ライブデモを予約",
    },
  },

  footer: {
    rights: "© 2026 AICE Inc. All rights reserved.",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    officialWebsite: "公式ウェブサイト",
  },
};

// 型エクスポート
export type Messages = typeof messages;
