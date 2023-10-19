import React from "react";
import {
  Container,
  TopbarLeft,
  TopbarCenter,
  TopbarRigth,
  Logo,
  Searchbar,
  SearchInput,
  Links,
  Link,
  IconsWrap,
  IconItem,
  IconBadge,
  TopbarImage,
  SearchIcon,
  PersonIcon,
  NotificationsIcon,
  ChatIcon,
} from "./topbar.styled";

export default function Topbar() {
  return (
    <Container>
      <TopbarLeft>
        <Logo>ShareVibes</Logo>
      </TopbarLeft>
      <TopbarCenter>
        <Searchbar>
          <SearchIcon />
          <SearchInput placeholder="Search for friend, post or video"></SearchInput>
        </Searchbar>
      </TopbarCenter>
      <TopbarRigth>
        <Links>
          <Link>Homepage</Link>
          <Link>Timeline</Link>
        </Links>
        <IconsWrap>
          <IconItem>
            <PersonIcon />
            <IconBadge>1</IconBadge>
          </IconItem>
          <IconItem>
            <ChatIcon />
            <IconBadge>2</IconBadge>
          </IconItem>
          <IconItem>
            <NotificationsIcon />
            <IconBadge>1</IconBadge>
          </IconItem>
        </IconsWrap>
        <TopbarImage src="/public/assets/person/1.jpg" alt=""></TopbarImage>
      </TopbarRigth>
    </Container>
  );
}
