import React from 'react'
import { Footer } from '../components'

export default function FooterContainer() {
    return (
          <Footer>
              <Footer.Column>
                <Footer.Row>
                    <Footer.ColumnA>
                        <Footer.Title>Newsletters</Footer.Title>
                        <Footer.SubTitle>Stay up to date on new releases, interviews, events, and updates from StudioVisit's community.</Footer.SubTitle>
                        <Footer.ButtonLink>Subscribe</Footer.ButtonLink>
                    </Footer.ColumnA>

                    <Footer.ColumnB>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Blog</Footer.Link>
                        <Footer.Link href="#">Press</Footer.Link>
                        <Footer.Link href="#">Careers</Footer.Link>
                        <Footer.ButtonLinkB>Subscribe</Footer.ButtonLinkB>
                    </Footer.ColumnB>
                </Footer.Row>

                <Footer.NewFooter>
                    <Footer.NewColumnA>
                        <Footer.Logo
                        src="/images/misc/studiovisit.svg"
                        alt="StudioVisit"
                        />
                        <Footer.NewLink href="#">Terms of Service</Footer.NewLink>
                        <Footer.NewLink href="#">Privacy</Footer.NewLink>
                        <Footer.NewRow>
                            <Footer.NewLinkA href="https://www.instagram.com/studiovisitofficial/?hl=en" target="_blank"><i class="fab fa-instagram"></i></Footer.NewLinkA>
                            <Footer.NewLinkA href="https://twitter.com/studiovisit_io" target="_blank"><i class="fab fa-twitter"></i></Footer.NewLinkA>
                        </Footer.NewRow>
                    </Footer.NewColumnA>
                    <Footer.NewColumnB>
                        <Footer.NewLinkB href="https://www.instagram.com/studiovisitofficial/?hl=en" target="_blank"><i class="fab fa-instagram"></i></Footer.NewLinkB>
                        <Footer.NewLinkC href="https://twitter.com/studiovisit_io" target="_blank"><i class="fab fa-twitter"></i></Footer.NewLinkC>
                    </Footer.NewColumnB>
                </Footer.NewFooter>
                <Footer.Break />
            </Footer.Column>
        </Footer>
    )
}


        //  <Footer>
        //     <Footer.Row>
        //         <Footer.Column>
        //             <Footer.Title>Newsletters</Footer.Title>
        //             <Footer.SubTitle>Stay up to date on new releases, interviews, events, and updates from StudioVisits community.</Footer.SubTitle>
        //             <Footer.Button>Subscribe</Footer.Button>
        //         </Footer.Column>

        //         <Footer.Column>
        //             <Footer.Link href="#">About</Footer.Link>
        //             <Footer.Link href="#">Blog</Footer.Link>
        //             <Footer.Link href="#">Press</Footer.Link>
        //             <Footer.Link href="#">Careers</Footer.Link>
        //         </Footer.Column>
        //     </Footer.Row>
        //     <Footer.Break />

        //     <Footer.Row>
        //         <Footer.Column>
        //             <Footer.Logo src="" alt="" />
        //             <Footer.Link href="#">Terms of Service</Footer.Link>
        //             <Footer.Link href="#">Privacy</Footer.Link>
        //         </Footer.Column>

        //         <Footer.Column>
        //             <Footer.Link href="#">Instagram</Footer.Link>
        //             <Footer.Link href="#">Twitter</Footer.Link>
        //         </Footer.Column>
        //     </Footer.Row>
        // </Footer>





//    <Footer>
//             <Footer.Title>Questions? Contact us.</Footer.Title>
//             <Footer.Break />
//             <Footer.Row>
//                 <Footer.Column>
//                     <Footer.Link href="#">FAQs</Footer.Link>
//                     <Footer.Link href="#">Investor Relations</Footer.Link>
//                     <Footer.Link href="#">Ways to Watch</Footer.Link>
//                     <Footer.Link href="#">Corporate Information</Footer.Link>
//                     <Footer.Link href="#">Netflix Originals</Footer.Link>
//                 </Footer.Column>
                
//                 <Footer.Column>
//                     <Footer.Link href="#">Help Centre</Footer.Link>
//                     <Footer.Link href="#">Jobs</Footer.Link>
//                     <Footer.Link href="#">Terms of Use</Footer.Link>
//                     <Footer.Link href="#">Contact Us</Footer.Link>
//                 </Footer.Column>
                
//                 <Footer.Column>
//                     <Footer.Link href="#">Account</Footer.Link>
//                     <Footer.Link href="#">Reedem gift cards</Footer.Link>
//                     <Footer.Link href="#">Priacy</Footer.Link>
//                     <Footer.Link href="#">Speed Test</Footer.Link>
//                 </Footer.Column>
                
//                 <Footer.Column>
//                     <Footer.Link href="#">Media Centre</Footer.Link>
//                     <Footer.Link href="#">Buy gift cards</Footer.Link>
//                     <Footer.Link href="#">Cookie Preferences</Footer.Link>
//                     <Footer.Link href="#">Legal Notices</Footer.Link>
//                 </Footer.Column>
//             </Footer.Row>
//             <Footer.Break />
//             <Footer.Text>Netflix United Kingdom</Footer.Text>
//         </Footer>