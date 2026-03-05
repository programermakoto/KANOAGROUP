// types/vanta.d.ts
declare module "vanta/dist/vanta.clouds.min" {
    interface VantaEffect {
      destroy(): void
      // 必要なら他のプロパティを追加
    }
  
    const VANTA: (options: any) => VantaEffect
    export default VANTA
  }