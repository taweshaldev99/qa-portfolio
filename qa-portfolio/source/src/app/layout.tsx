import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../styles/global.css';
const title='Taweshal Dev Thakur | Quality Assurance Portfolio';
const description='Quality assurance portfolio of Taweshal Dev Thakur in Kathmandu, Nepal. Manual testing, test-case design, defect tracking, Python and SQL.';
export const metadata: Metadata={title,description,authors:[{name:'Taweshal Dev Thakur'}],icons:{icon:'/favicon.svg'},openGraph:{title,description,type:'website'},twitter:{card:'summary',title,description}};
export const viewport: Viewport={themeColor:'#194c3f',width:'device-width',initialScale:1};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
