export interface Showcase {
  href?: string;
  title: string;
  src: string;
  description?: string;
}

export const showcases: Showcase[] = [
  {
    href: `https://medium.com/@witchayutpepejongpattanasombut/%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2-%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2-%E0%B9%82%E0%B8%AB%E0%B8%A5%E0%B8%94%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-google-colab-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-aac4a396e354`,
    title: `แก้ปัญหา(หนีปัญหา?)โหลดไฟล์ช้าด้วย Google Colab ฉบับจับมือทำ`,
    src: `/images/medium_1.png`,
    description: `หลายๆคนคงเคยเจอปัญหากับการโหลดไฟล์ที่ขนาดไม่ใหญ่มาก แต่โหลดยังไงก็ไม่เสร็จซักที ทั้งๆที่เน็ตเราก็ใช้งานได้ปกติ
    ผมเลยอยากนำเสนอวิธีโหลดไฟล์ “ทางอ้อม” ที่เร็วกว่าการนั่งรอเป็นชั่วโมงๆโดยการใช้ resource ฟรีที่ Google มีให้เราใช้ นั่นก็คือ การให้ VM ของ Google Colab เป็นตัวกลางในการโหลดไฟล์ให้เรา ซึ่งด้วยพลัง Network ของ Google นั้น จะช่วยให้เราได้ไฟล์ที่เราต้องการมาอย่างรวดเร็ว`
  }
];
