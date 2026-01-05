import facebookLogo from "assets/socials/facebook-logo.png";
import xLogo from "assets/socials/x-logo.png";
import linkedInLogo from "assets/socials/linkedin-logo.png";

export const subscribeToNewsletterData = {
  headerText: "Want to stay up to date with Web Accessibility?",
  buttonUrl: "#",
  buttonText: "Subscribe to our free newsletter",
};

export const legalLinksData = {
  headerText: "Legal stuff",
  links: [
    { text: "Terms & Conditions", href: "#"},
    { text: "Privacy Policy", href: "#" },
    { text: "Cookie Policy", href: "#" },
  ],
};

export const socialLinksData = {
  headerText: "Find us on social media",
  ariaLabel: "Footer links",
  links: [
    { imageUrl: facebookLogo, href: "#", alt: "Facebook" },
    { imageUrl: xLogo, href: "#", alt: "X" },
    { imageUrl: linkedInLogo, href: "#", alt: "LinkedIn" },
  ],
};

export const smallPrintData = {
  ariaLabel: "Legal information",
  text: [
      "© 2025 Rolling Block Ltd – Registered in England & Wales – All rights reserved.",
      "Company No. XXXXXXXX",
      "Registered Address: XX XXXXXX XXXXX, XXXXX, XXXX XXX",
      "VAT No. XXX XXXX XXX",
  ]
};