export interface Showcase {
  key: string;
  href?: string;
  title: string;
  src: string;
  description?: string;
}

export const showcases: Showcase[] = [
  {
    key: "medium_1",
    href: `https://medium.com/@witchayutpepejongpattanasombut/%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2-%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2-%E0%B9%82%E0%B8%AB%E0%B8%A5%E0%B8%94%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-google-colab-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-aac4a396e354`,
    title: `แก้ปัญหา(หนีปัญหา?)โหลดไฟล์ช้าด้วย Google Colab ฉบับจับมือทำ`,
    src: `/images/medium_1.png`,
    description: `หลายๆคนคงเคยเจอปัญหากับการโหลดไฟล์ที่ขนาดไม่ใหญ่มาก แต่โหลดยังไงก็ไม่เสร็จซักที ทั้งๆที่เน็ตเราก็ใช้งานได้ปกติ
    ผมเลยอยากนำเสนอวิธีโหลดไฟล์ “ทางอ้อม” ที่เร็วกว่าการนั่งรอเป็นชั่วโมงๆโดยการใช้ resource ฟรีที่ Google มีให้เราใช้ นั่นก็คือ การให้ VM ของ Google Colab เป็นตัวกลางในการโหลดไฟล์ให้เรา ซึ่งด้วยพลัง Network ของ Google นั้น จะช่วยให้เราได้ไฟล์ที่เราต้องการมาอย่างรวดเร็ว`
  },
  {
    key: "medium_2",
    href: `https://medium.com/@witchayutpepejongpattanasombut/%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%97%E0%B8%B3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%94%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-locality-6e84bed7b353`,
    title: `รู้จักและทำให้โค้ดทำงานเร็วขึ้นด้วย Locality`,
    src: `/images/medium_2.png`,
    description: `เนื่องจากกำลังนั่งอ่านวิชา Computer System Architecture อยู่สำหรับสอบไฟนอลแล้วเจอตัวอย่างที่น่าสนใจและ(รู้สึกว่า)เข้าใจง่ายดี เลยอยากเอามาแชร์ให้หลายๆคนดูกัน
    ผมมีโค้ดสั้นๆมาให้ดูสองแบบ
    โค้ดทั้งสองแบบนี้ทำงานเหมือนกันคือ ทำการสร้าง Array 2 มิติขึ้นมา จากนั้นก็ทำการลูปเพื่อหาผลรวมของค่าใน Array นั้นเก็บไปที่ตัวแปร acc แล้วจบการทำงาน
    จุดที่ต่างกันของโค้ดสองแบบนี้คือ แบบแรกจะลูปตัวแปร col ก่อน ส่วนแบบหลังจะลูปที่ตัวแปร row ก่อน ซึ่งก็ดูไม่น่าจะมีอะไร ดูน่าจะทำงานได้เร็วเท่าๆกัน หรืออาจจะต่างกันบ้างเล็กน้อย`
  },
  {
    key: "medium_3",
    href: `https://medium.com/@witchayutpepejongpattanasombut/%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C-%E0%B8%A2%E0%B8%B7%E0%B8%99%E0%B8%87%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%94%E0%B8%87-dev-in-scb-hackathon-a8844b118238`,
    title: `[แชร์ประสบการณ์] ยืนงงในดง Dev in SCB Hackathon`,
    src: `/images/medium_3.jpeg`,
    description: `เมื่อวันศุกร์ที่แล้ว (21 June 2019) ได้มีโอกาสไปเข้าร่วมงาน SCB Hackathon “The First Open Banking Hackathon” ซึ่งก็เป็นงาน Hackathon ครั้งที่สองของผมเอง แต่ถ้านับจริงๆแล้วก็ต้องบอกว่าเป็น Hackathon ครั้งแรกที่เป็นงาน Hack แบบแข่งจริงจัง (ครั้งแรกที่เคยไป Hack คืองาน Stupid Hackathon ซึ่งเน้นเฮฮาซะมากกว่า)
    ขอบคุณภาพประกอบสวยๆจาก พี่ป๋อม SCB ด้วยครับ`
  },
  {
    key: "medium_4",
    href: `https://medium.com/@witchayutpepejongpattanasombut/export-reactcomponent-%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A-named-export-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD-default-export-%E0%B8%94%E0%B8%B5%E0%B8%99%E0%B8%B0-1554b23bce60`,
    title: `Export ReactComponent เป็นแบบ Named export หรือ Default export ดีนะ?`,
    src: `/images/medium_4.png`,
    description: `Export ?
    โดยปกติ เวลาที่เราเขียน React app แล้วเกิด Component ที่คล้ายกันและใช้ซ้ำกันหลาย ๆ ครั้ง เราก็จะทำการ Refactor โดยการแยก Component นั้นออกมาเป็นไฟล์แยกไว้ แล้ว Export ออกมาเพื่อนำไป Import ใช้ตามจุดต่าง ๆ ตามที่ต้องการ
    วิธีการ Export ตัวแปรหรือข้อมูลที่อยู่ในไฟล์นั้น มีอยู่ 2 วิธีหลัก ๆ`
  },
  {
    key: "github_1",
    href: `https://circular-color-picker.netlify.com/`,
    src: `/images/github_1.jpg`,
    title: `Circular-color-picker`,
    description: `Circular-color-picker react component for generating gradient color with download image button`
  }
];
