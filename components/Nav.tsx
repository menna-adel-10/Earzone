import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button, Container } from "@mui/material"
import Cart from "./Cart"

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/headphones", text: "Headphones" },
  { href: "/speakers", text: "Speakers" },
  { href: "/earphones", text: "Earphones" },
]

const Nav = () => {
  const [showChart, setShowCart] = useState(false);
  return (
    <div
      style={{
        padding: "1rem 0",
        backgroundColor: "#0c1114",
        color: "#ffffff",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={150}
          height={40}
        />
        <ul
          style={{
            marginRight: "2rem",
            textTransform: "uppercase",
            padding: "0.5rem 0",
            textDecoration: "none",
          }}
        >
          {navLinks.map((link, index) => (
            <Link
              style={{ marginRight: "2rem", fontWeight: 600 }}
              key={index}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </ul>
        <Button onClick={() => setShowCart(!showChart)}>
          <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt=""
          width={30}
          height={30}
        />
        </Button>
      </Container>
      {showChart ? <Cart /> : null}
    </div>
  )
}

export default Nav
