import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMediaWrap,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it Works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact </FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Address</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">How it Works</FooterLink>
              <FooterLink to="/signin">Influencers</FooterLink>
              <FooterLink to="/signin">Brands</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Links</FooterLinkTitle>
              <FooterLink to="/signin">Privacy Notice</FooterLink>
              <FooterLink to="/signin">Cookie Notice</FooterLink>
              <FooterLink to="/signin">Legal Statement</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Bitin</SocialLogo>
            <WebsiteRights>
              ©{new Date().getFullYear()} All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
