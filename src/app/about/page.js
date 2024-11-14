'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button, Collapse, Box } from '@mui/material';


const teamMembers = [
    {
        name: 'Duresa Guye',
        role: 'Founder & CEO',
        image: '/assets/dure_photo.jpg',
        responsibilities: [
            'Leads company vision, strategy, and decision-making.',
            'Acts as the spokesperson, drives investor relations, and connects with stakeholders.',
            'Works closely with other team members to align on goals and objectives.'
        ]
    },
    {
        name: 'Alpha Lencho',
        role: 'Chief Operations Officer',
        image: '/assets/alpha_photo.jpg',
        responsibilities: [
            'Oversees daily operations, project management, and processes.',
            'Ensures smooth execution of internal activities and coordinates between teams.',
            'Handles HR functions (team culture, hiring, performance) if no dedicated HR role exists.'
        ]
    },
    {
        name: 'Tolosa Diriba',
        role: 'Chief Technology Officer',
        image: '/assets/tolosa_photo.jpg',
        responsibilities: [
            'Leads product development, technology choices, and technical strategy.',
            'Manages engineering tasks, codebase, and technical problem-solving.',
            'Coordinates with Product/Design for product development.'
        ]
    },
    {
        name: 'Ruth Adane',
        role: 'Product Manager / UX Designer',
        image: '/assets/ruth_photo.jpg',
        responsibilities: [
            'Defines product roadmap, feature prioritization, and user journey.',
            'Focuses on customer feedback, user experience, and interface design.',
            'Works with the CTO and developers to turn product vision into reality.'
        ]
    },
    {
        name: 'Hilina Adane',
        role: 'Marketing and Growth Lead',
        image: '/assets/hilina_photo.jpg',
        responsibilities: [
            'Drives brand building, marketing campaigns, and customer acquisition.',
            'Manages digital presence (social media, content, ads) and community engagement.',
            'Gathers customer insights to support product and business strategies.'
        ]
    },
    {
        name: 'Mohammed Ahmed',
        role: 'Finance & Customer Success Lead',
        image: '/assets/mohammed_photo.jpg',
        responsibilities: [
            'Manages finances, budgets, and any fundraising activities.',
            'Handles customer support, onboarding, and relationship management to ensure user satisfaction.',
            'Collects feedback and works with the Product Manager to improve the customer journey.'
        ]
    }
];

const About = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track which team member's responsibilities are open

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle between opening and closing
    };

    return (
        <Container sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" align="center" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
                We are a dedicated team committed to solving the challenges of recycling materials. Our mission is to create sustainable solutions that benefit both the environment and the community.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, mx: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                alt={member.name}
                                height="200"
                                image={member.image}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" align="center">
                                    {member.role}
                                </Typography>
                            </CardContent>
                            {/* Button for toggling the role details */}
                            <Button
                                onClick={() => handleToggle(index)}
                                sx={{ width: '100%' }}
                            >
                                Role ↓
                            </Button>
                            
                            <Collapse in={openIndex === index}>
                                    <Box sx={{ mt: 2 }}>
                                        {member.responsibilities.map((responsibility, idx) => (
                                            <Box 
                                                key={idx} 
                                                sx={{
                                                    backgroundColor: '#e3f2fd', 
                                                    padding: '10px', 
                                                    marginBottom: '8px', 
                                                    borderRadius: '4px', 
                                                    boxShadow: 2
                                                }}
                                            >
                                                <Typography variant="body2">{responsibility}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Collapse>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default About;
