import { HowWork } from '../Component/howWork/HowWork'
import { MobilePopularCategory } from '../Component/popularCategory/MobilePopularCategory'
import { PopularCategory } from '../Component/popularCategory/PopularCategory'
import { CardLeft } from '../Component/share/CardLeft'
import { CardRight } from '../Component/share/CardRight'
import { MobileCardLeft } from '../Component/share/MobileCardLeft'
import { SecondCardBlog } from '../Component/share/SecondCardBlog'
import { Subcribe } from '../Component/share/Subcribe'
import { FirstBox } from '../Component/share/firstBox'
import { MobileSubcribe } from '../Component/share/mobileSubcribe'
import styles from './style/HomeStyle.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <main className={styles.main}>
    <Head>
        <title>
          Local tasker
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
    <FirstBox/>
    <HowWork/>
    <PopularCategory/>
    <MobilePopularCategory/>
    <CardLeft title="Why Local Tasker?" para1="Are you looking for a way to get things done or
a platform to showcase your talents? Look no
further than Local Tasker, the ultimate
platform for empowering everyday individuals,
one task at a time." para2="For those in need of services, Local Tasker offers
a diverse range of individuals who are ready and
able to complete your tasks. From stay-at-home
parents, retirees, students, and single parents or
second jobbers, our platform makes it easy for
you to find the right person for the job." img="/Homepage/Whylocaltasker.png" btnvalue="Hire a Tasker" link='https://app.localtasker.co.uk/register?type=2'/>
<MobileCardLeft title="Why Local Tasker?" para1="Are you looking for a way to get things done or
a platform to showcase your talents? Look no
further than Local Tasker, the ultimate
platform for empowering everyday individuals,
one task at a time." para2="For those in need of services, Local Tasker offers
a diverse range of individuals who are ready and
able to complete your tasks. From stay-at-home
parents, retirees, students, and single parents or
second jobbers, our platform makes it easy for
you to find the right person for the job." img="/Homepage/Whylocaltasker.png" btnvalue="Hire a Tasker" link='https://app.localtasker.co.uk/register?type=2'/>
    <CardRight/>
    <SecondCardBlog/>
    <div className='desktopboxdisplay'><Subcribe/></div>
    <MobileSubcribe/>
    </main>
  )
}
