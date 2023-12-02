import Image from 'next/image'
import Link from 'next/link';


// https://revnology.gitlab-page.revnology.com.my/kakijalan/index.html

export default function Contact() {
  return (
    // <div className="contact-component">
    //   <Link href="https://app.warotator.com/salesteam" target="_blank">
    //     <img  src="/images/whatsapp.png" />
    //   </Link>
    // </div>
    <div className="position-fixed d-flex justify-content-end" style={{bottom: '50px', right: '1%', zIndex: 100, width: '10%'}}>
      <a href="https://saleskakijalan.wasap.my" target="_blank">
        <img src="/icons/whatsapp.png" alt="whatsapp" style={{cursor: 'pointer', maxWidth: '73%'}} />
      </a>
    </div>
  )
}
