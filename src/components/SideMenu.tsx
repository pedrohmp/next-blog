import React from "react";
import Link from "next/link";
import { Container, SocialMidia } from "@/styles/pages/SideMenu";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

interface SideMenuProps {
  themeToggler: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ themeToggler }: SideMenuProps) => {
  return (
    <Container>
      <img
        src="https://avatars1.githubusercontent.com/u/25489097?s=460&u=f9887d0860cdd57b7c0233f328635844a63fe9c4&v=4"
        alt=""
      />

      <h3>Pedro Porta</h3>
      <p>Um blog sobre novas tecnologias e programação.</p>

      <button onClick={() => themeToggler()}>click here</button>

      <ul>
        <li>Artigos</li>
        <li>Sobre mim</li>
        <li>Entre em contato</li>
      </ul>

      <SocialMidia>
        <Link href="https://github.com/">
          <a>
            <AiFillGithub size="1.5em" />
          </a>
        </Link>
        <Link href="https://github.com/">
          <a>
            <AiFillLinkedin size="1.5em" />
          </a>
        </Link>
        <Link href="https://github.com/">
          <a>
            <AiOutlineTwitter size="1.5em" />
          </a>
        </Link>
        <Link href="https://github.com/">
          <a>
            <AiOutlineInstagram size="1.5em" />
          </a>
        </Link>
      </SocialMidia>

      <small>© All rights reserved.</small>
    </Container>
  );
};

export default SideMenu;
