// lib/news.js

export const newsData = [
    {
      id: "1",
      title: "株式会社KANOA GROUP設立",
      date: "2023-07-22",
      image: "/school.png",
      description: "設立のご挨拶と今後の事業計画について。",
      body: "設立の背景やビジョン、代表メッセージを記載します。"
    },
    {
      id: "2",
      title: "光ファイバ(通信事業)について",
      date: "2024-11-22",
      image: "/school.png",
      description: "通信事業に関するご案内。",
      body: "サービス内容、料金、導入フロー等。"
    },
    {
      id: "3",
      title: "KANOA GROUP採用のお知らせ",
      date: "2023-07-22",
      image: "/school.png",
      description: "採用情報のご案内。",
      body: "募集要項、選考フロー、応募リンクなど。"
    }
  ];
  
  export async function getAllNews() {
    return newsData;
  }
  
  export async function getNewsById(id) {
    return newsData.find(d => d.id === String(id)) || null;
  }
  