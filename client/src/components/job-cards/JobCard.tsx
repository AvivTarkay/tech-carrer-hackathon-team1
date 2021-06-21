import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function JobCard({ userItem, setUser }: any): any {
  // const { position, company, location, _id, numOfPeopleApplied } = userItem;
     const { categories, company, contents, name, publication_date,refs,short_name } = userItem;
//   categories: [{…}] 
// company: {id: 741, short_name: "atlassian", name: "Atlassian"}
// contents: "<div><b>Atlassian is continuing to hire with all interviewing and on-boarding done virtually due to COVID-19. All new and existing Atlassians will continue to work from home until it’s safe to return to our offices. When our offices re-open, we will provide the choice to work from home or return to work in an office unless a job requirement makes it necessary for a particular role to be performed at an Atlassian office.</b></div>\n\n<div><br></div>\n\n<div>Atlassian is looking for a passionate data analyst who will power up our teams to derive even more meaningful insights from our data. Is that you?</div>\n\n<div><br></div>\n\n<div>Our team is looking for someone that is passionate about data, a self-starter, highly organised, analytical and have a good eye for detail. You will become the analytical lead on the Enterprise business who understands data at Atlassian, knows where to find it, and manages the process to make that data meaningful. You love thinking about the ways the business can benefit from this data and you will have access to an analytics platform (built on Amazon Web Services) to build new data assets, automate analyses and reporting, and experiment with machine learning algorithms!</div>\n\n<div><br></div>\n\n<div><b>More about you</b></div>\n\n<div>You love working a job that can change at a moment's notice. You are not phased by complexity and volume of data nor the dynamic sources and platforms where these datasets may reside, and understand the value this data provides when we make critical business decisions. You thrive in an environment where you are charting your own course and working on problems for which there is no clear solution; where creativity is as crucial as your ability to write code. You are someone who thrives in a robust team and enjoys working in a dynamic environment with plenty of opportunities to learn and develop. With strong partner engagement skills, you are able to balance contending priorities and deliver on deadlines.</div>\n\n<p><strong>On your first day, we'll expect you to have:</strong><ul><li>Shown success in using data to drive insights at industry-leading companies</li><li>Strong SQL skills and have proven experience using statistical tools to interpret data (e.g. R or Python)</li><li>Solid understanding of statistics and understand data significance</li><li>Familiarisation within data visualisation, data wrangling and data discovery tools</li><li>An excellent communicator and passionate to collaborate with global, multi-functional teams</li><li>A willingness to accept failure, learn and try again</li></ul></p>\n<p><strong>It's preferred, but not required, that you have</strong><ul><li>A degree in Business, Statistics, Finance or a related analytical field</li><li>Experienced in Tableau or other visualisation tools</li><li>Technology or Software / SaaS industry experience</li></ul></p>\n<div><b>More about our team</b></div>\n\n<div><br></div>\n\n<div>The FP&amp;A team is a hardworking and collaborative team with a mix of technology industry, consulting and financial services background. We encourage decision-making at every level and highly value a forward-thinking approach and organisational openness. We work closely with business leaders across multiple functions including product, GTM and finance to support the Company’s continued growth. You'll join a team that is not only smart, motivated, passionate about Atlassian's products and customers, but also fun to work with.</div>\n\n<div><br></div>\n\n<div><b>More about our benefits</b></div>\n\n<div><br></div>\n\n<div>Whether you work in an office or a distributed team, Atlassian is highly collaborative and yes, fun! To support you at work (and play) we offer some fantastic perks: ample time off to relax and recharge, flexible working options, five paid volunteer days a year for your favourite cause, an annual allowance to support your learning &amp; growth, unique ShipIt days, a company paid trip after five years and lots more.</div>\n\n<div><br></div>\n\n<div><b>More about Atlassian</b></div>\n\n<div><br></div>\n\n<div>Creating software that empowers everyone from small startups to the who’s who of tech is why we’re here. We build tools like Jira, Confluence, Bitbucket, and Trello to help teams across the world become more nimble, creative, and aligned—collaboration is the heart of every product we dream of at Atlassian. From Amsterdam and Austin, to Sydney and San Francisco, we’re looking for people who want to write the future and who believe that we can accomplish so much more together than apart. At Atlassian, we’re committed to an environment where everyone has the autonomy and freedom to thrive, as well as the support of like-minded colleagues who are motivated by a common goal to: <a href=\"https://www.atlassian.com/company.\">Unleash the potential of every team</a>.</div>\n\n<div><br></div>\n\n<div><b>Additional Information</b></div>\n\n<div><br></div>\n\n<div>We believe that the unique contributions of all Atlassians is the driver of our success. To make sure that our products and culture continue to incorporate everyone's perspectives and experience we never discriminate on the basis of race, religion, national origin, gender identity or expression, sexual orientation, age, or marital, veteran, or disability status.</div>\n\n<div><br></div>\n\n<div>Atlassian is committed to providing reasonable accommodations to all individuals participating in the application and interview process, and while performing job functions. Please note that you will have the opportunity to request accommodations at each stage of the assessment process. To request accommodations before scheduling an interview, please reach out to atlassian-accommodations@atlassian.com and someone will follow up shortly.</div>\n\n<div><br></div>\n\n<div>All your information will be kept confidential according to EEO guidelines.</div>\n\n<div><br></div>\n\n<div>If your experience looks a little different from what we’ve identified and you think you can rock the role, we’d love to learn more about you.</div>\n\n<div><br></div>\n\n<div>Learn more about Atlassian’s culture, interviewing flow, and hiring process by checking out our <a href=\"https://www.atlassian.com/company/careers/resources\">Candidate Resource Hub</a>.</div>"
// id: 5959853
// levels: [{…}]
// locations: [{…}]
// model_type: "jobs"
// name: "Senior Data Analyst, Finance"
// publication_date: "2021-06-01T23:10:00Z"
// refs: {landing_page: "https://www.themuse.com/jobs/atlassian/senior-data-analyst-finance"}
// short_name: "senior-data-analyst-finance"
// tags: []
// type: "external"
// __proto__: Object

  return (
    <Container
      onClick={() => {
        setUser(userItem);
      }}
    >
      <Link to={`/recruiter/:${company.id}`}>
        <Card style={{ padding: 5, cursor: "pointer" }}>
          <Meta
            avatar={
              <Avatar
                src={`/img/${company.name}.png`}
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              />
            }
            title={company.short_name}
            // description={company}
          />
          <p>{refs.landing_page}</p>
          <p>{contents}</p>
        </Card>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  text-align: left;
  /* padding: 12px 24px; */
  outline: none;
  border: none;

  /* img{
    width: 100%;
    height: 100%;
    
    

  } */
  .ant-card-meta-avatar{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-card-meta-avatar img{
width: 100%;
height: 100%;
  }

`
