'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Button, Collapse, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';

const missionCards = [
    {
        name: "Empower Waste Producers",
        description: "Provide households, hotels, and institutions with a streamlined platform to manage, track, and contribute their plastic waste responsibly.",
        
        testimonial: "Our platform simplifies waste management for every user, from households to large institutions.",
  
    },
    {
        name: "Facilitate Sustainable Recycling",
        description: "Connect plastic waste producers with recycling companies, ensuring efficient waste collection and recycling processes.",
      
        testimonial: "By simplifying the process, we bridge the gap between waste producers and recycling efforts.",
     
    },
    {
        name: "Promote Environmental Impact Awareness",
        description: "Enable users to understand and track their positive environmental contributions by measuring their impact in real time.",
      
        testimonial: "Every small contribution adds up to make a significant environmental impact.",
      
    }
];

const visionCards = [
    {
        name: "A Waste-Free Future",
        description: "Strive towards a world where plastic waste is minimized through responsible collection, recycling, and continuous awareness.",
       
        testimonial: "Together, we can create a cleaner, greener future for everyone.",
      
    },
    {
        name: "Global Waste Collection Network",
        description: "Build a widespread network of waste producers and recycling partners working together to close the loop on plastic waste.",
        
        testimonial: "We believe a global network can change the future of waste management.",
      
    },
    {
        name: "Data-Driven Sustainability",
        description: "Empower individuals and companies with data analytics that highlight their collective impact on environmental preservation.",
        
        testimonial: "With data, we can drive smarter and more effective recycling solutions.",
       
    }
];



const About = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Container sx={{backgroundColor: '#f9f9f9' }}>
            {/* Mission Section */}
            <Box sx={{ py: 4, backgroundColor: '#f9f9f9' }}>
                <Typography variant="h4" align="center" gutterBottom color='#111827' fontWeight='bold'>
                    Our Mission
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {missionCards.map((service, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Card sx={{ boxShadow: 3, p: 2, height: '100%', backgroundColor: '#f9f9f9', color: '#111827'}}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2"  paragraph>
                                        {service.description}
                                    </Typography>

                                   
            

                                    {/* Testimonial Section */}
                                    <Typography variant="body2"  >
                                        {service.testimonial}
                                    </Typography>

                                  
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Vision Section */}
            <Box sx={{backgroundColor: '#f9f9f9' }}>
                <Typography variant="h4" align="center" gutterBottom color='#111827' fontWeight='bold'>
                    Our Vision
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {visionCards.map((service, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Card sx={{ boxShadow: 3, p: 2, height: '100%' , backgroundColor: '#f9f9f9', color: '#111827' }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {service.description}
                                    </Typography>

                                   

                                    {/* Testimonial Section */}
                                    <Typography variant="body2" >
                                        {service.testimonial}
                                    </Typography>

                                    
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Team Section */}
            <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
                <Typography variant="h4" align="center" gutterBottom>
                   Meet Our Team
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
                    We are a dedicated team committed to solving the challenges of recycling materials.
                </Typography>
               
            </Box>
        </Container>
    );
};

export default About;