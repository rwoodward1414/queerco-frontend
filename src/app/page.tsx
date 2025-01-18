import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/live";
import * as queries from "../helpers/queries";
import { PortableText } from "next-sanity";
import { urlFor } from "@/helpers/urlBuilder";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardSubtitle from 'react-bootstrap/CardSubtitle'
import CardText from 'react-bootstrap/CardText'
import { CardImg } from "react-bootstrap";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { UrlObject } from "url";

export default async function Home() {

  const { data: about } = await sanityFetch({ query: queries.aboutQuery });
  const { data: socials } = await sanityFetch({ query: queries.socialsQuery });
  const { data: meeting } = await sanityFetch({ query: queries.meetingQuery });
  const { data: queerspace } = await sanityFetch({ query: queries.queerspaceQuery });
  const { data: resources } = await sanityFetch({ query: queries.resourceQuery });
  const { data: update } = await sanityFetch({ query: queries.first });

  console.log(about);

  return (
    <>
      <main className="p-2">
        <Container>
        <div className=''>
          <Stack direction="horizontal" gap={3}>
            <Image src="/images/letters.png" alt="QueerCo" width={238} height={84}/>
            <Button className="ms-auto" type='button'>Queerspace</Button>
            <Button>Resources</Button>
            <Button>Contact</Button>
            <Button>Join</Button>
          </Stack>
        </div>
        <section id='title' className='m-auto w-75'>
          <h1>UNSW Queer Collective</h1>
          <article id='about' className="">
            <PortableText value={about.About}/>
          </article>
          <Container className=''>
            <Stack direction="horizontal" gap={3} className="ms-auto">
                {socials.map((social: { _id: Key | null | undefined; link: string | UrlObject; image: SanityImageSource; name: string; }) => (
                  <div key={social._id}>
                    <Link href={social.link}>
                      <Image src={urlFor(social.image).width(40).url()} alt={social.name} width={40} height={40}/>
                    </Link>
                  </div>
                ))}
            </Stack>
          </Container>
          {/* <aside id='graphic'>
            <Image src="/images/logographic.png" alt="logo" width={238} height={238}/>
          </aside> */}
        </section>
        <Container>
          <Row>
            <Col className="w-75">
              <Stack>
              <article>
                  <h2 className='text-xl'>Meeting Info</h2>
                  <div className="bg-gray-200">
                    <p>{meeting.TimeAndDate}</p>
                    <p>{meeting.Location}</p>
                  </div>
                </article>
                <article>
                  <h2>Latest Update</h2>
                  <Card>
                    <CardBody>
                      <CardTitle>{update.title}</CardTitle>
                      <CardSubtitle>{update._createdAt}</CardSubtitle>
                        <PortableText value={update.details} />
                    </CardBody>
                  </Card>
                </article>
              </Stack>
            </Col>
            <Col className='ms-auto'>
                <Stack>
                <article>
                  <h2 className='text-xl'>Events Calendar</h2>
                  <iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=2&ctz=Australia%2FSydney&showPrint=0&showTitle=0&showCalendars=0&mode=MONTH&src=YzMxOWRlOTllNDY4MmNjMDQyYTZiYmIwYjg5NTQ0MmI5NjRlNTE0NzFlYWNiMDdmNGNmNjVmMWQ0ZGZiYTI5MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688" width="600" height="500" scrolling="no"></iframe>
                </article>
                </Stack>
            </Col>
          </Row>
        </Container>
        <section id='queerspace'>
          <Container>
            <h2>Find the Queerspace</h2>
            <Row>
              <Col className="w-75">
                <PortableText value={queerspace.details}/>
              </Col>
              <Col className='ms-auto'>
              {/* <Card> */}
                <div id="g-mapdisplay">
                  <iframe src="https://www.google.com/maps/embed/v1/place?q=June+Griffith+Building+(F10)&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                  </iframe>
                </div>
                {/* </Card> */}
              </Col>
            </Row>
          </Container>
        </section>
        <section id='resources'>
          <h2 className='text-xl'>Resources</h2>
          <Row>

          {resources.map((resource: { _id: Key | null | undefined; link: string | UrlObject; image: SanityImageSource; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) =>(
            <Col key={resource._id}>
              <Link href={resource.link} className="ms-auto">
              <Card>
                <CardImg variant="top" src={urlFor(resource.image).url()} />
                  <p className="m-auto p-3">{resource.title}</p>
              </Card>
              </Link>
            </Col>
          ))}
          </Row>
        </section>
        <section id='contact'>
          <h2 className='text-xl'>Contact</h2>
          <Card>
            <Button>Email</Button>
            <Row>
              <Col>
                <Button>Instagram</Button>
              </Col>
              <Col>
                <Button>Discord</Button>
              </Col>
            </Row>
          </Card>
        </section>
        </Container>
        <Container>
        <h2 className='text-xl'>Acknowledgement of Country</h2>
          <p>
            
          </p>
        </Container>
      </main>
      <footer>
      </footer>
    </>
  );
}
