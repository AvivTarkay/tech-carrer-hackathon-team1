import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import "..";
import { getManyJobOffers } from "../../utils/drafts/jobOffer.utils";
import { Input, Row, Col, Spin } from "antd";
import LinkdInRouter from "./LinkdInRouter";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function LinkdIn() {
  const { Search } = Input;
  const [fetchedDataDb, setFetchedDataDb] = useState<any>([]);
  const [newJobs, setNewJobs] = useState<any>([]);
  const [UserInfo, setUserInfo] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      let fetchedData = await getManyJobOffers({ isHidden: false }) ;
      const jobOffers = fetchedData.data || []
      setFetchedDataDb(jobOffers);  
      setUserInfo(jobOffers[0])
    };
    fetchData();
    
  }, []);

  useEffect(()=>{
    const getJobs = async()=>{
      try {
        const response =await axios("https://www.themuse.com/api/public/jobs?category=Corporate&category=Data%20Science&category=Design&category=Editor&category=HR&category=IT&category=Marketing&category=Product&category=Project%20Management&category=Recruiting&category=Software%20Engineer&category=UX&level=Entry%20Level&level=Mid%20Level&level=Senior%20Level&level=management&level=Internship&page=1&descending=true")
        setNewJobs(response.data.results)
      
      } catch (error) {
        console.log(error);
        
      }
        }
        getJobs()
  },[])
 
  
  return (
    
      (fetchedDataDb?.length > 0 ) ? 
        <MainContainer>
          <Search placeholder="search" enterButton="Search" size="large" />
          <Container>
            <Row style={{ width: "100%" }}>
              <Col
                span={16}
                push={8}
                style={{ overflowY: "scroll", height: "100%" }}
                className="colRightCards"
              >
                <LinkdInRouter UserInfo={UserInfo}  />
              </Col>

              <Col
                span={8}
                pull={16}
                style={{ overflowY: "scroll", height: "100%" }}
                className="allCardsCol"
              >
                {React.Children.toArray(
                  newJobs.map((item: any) => {
                    return <JobCard setUser={setUserInfo} userItem={item} />;
                  })
                )}
              </Col>
            </Row>
          </Container>
        </MainContainer>
       : 
        <Spin size="large"/>
    
  );
}

const Container = styled.div`
  width: 75vw;
  height: 100vh;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  background-color: #b1b2b4;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

const MainContainer = styled.div`
  width: 75vw;
  margin: auto;
`;
