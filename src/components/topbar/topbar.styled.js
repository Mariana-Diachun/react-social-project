import styled from "styled-components";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: #1877f2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;
export const TopbarLeft = styled.div`
  flex: 3;
`;
export const TopbarCenter = styled.div`
  flex: 5;
`;
export const TopbarRigth = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
export const Logo = styled.span`
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;
export const Searchbar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;
export const SearchIcon = styled(Search)`
  font-size: 20px !important;
  margin-left: 10px;
`;
export const PersonIcon = styled(Person)``;
export const ChatIcon = styled(Chat)``;
export const NotificationsIcon = styled(Notifications)``;

export const SearchInput = styled.input`
  border: none;
  width: 70%;
  &:focus {
    outline: none;
  }
`;
export const Links = styled.div``;
export const Link = styled.span`
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
`;
export const IconsWrap = styled.div``;
export const IconItem = styled.div`
  margin-right: 15px;
  cursor: pointer;
  position: relative;
`;
export const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
`;
export const TopbarImage = styled.img`
  display: block;
  width: 32px;
  height: 32px;
`;
