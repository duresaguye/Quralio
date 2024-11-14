'use client';

import React from 'react';
import { Typography, Grid, Container, Button, Card, CardContent, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const services = [
    {
        name: 'Service A',
        description: 'Detailed description about Service A, including its benefits and how it addresses customer needs.',
        features: [
            'Feature 1: Describes how Service A stands out.',
            'Feature 2: Highlights customer benefits.',
            'Feature 3: Shows problem-solving capabilities.'
        ],
        cta: 'Learn More',
        testimonial: '“Service A has transformed our business. Highly recommended!” – Customer Name'
    },
    {
        name: 'Service B',
        description: 'An overview of Service B, focused on its unique value propositions.',
        features: [
            'Feature 1: Easy to integrate with existing systems.',
            'Feature 2: Increases efficiency and productivity.',
            'Feature 3: Supported by excellent customer service.'
        ],
        cta: 'Discover Service B',
        testimonial: '“With Service B, we’ve achieved seamless growth.” – Customer Name'
    },
    {
        name: 'Service C',
        description: 'Service C’s advantages and how it simplifies complex processes for customers.',
        features: [
            'Feature 1: Highly customizable.',
            'Feature 2: Offers real-time data insights.',
            'Feature 3: Reduces operational costs.'
        ],
        cta: 'Get Started',
        testimonial: '“Service C made a significant impact on our efficiency.” – Customer Name'
    }
];

const ServicePage = () => {
    return (
        <Container sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Our Services
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
                Quralio offers a range of services designed to optimize your experience. Explore our services to find the perfect solution for your needs.
            </Typography>

            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card sx={{ boxShadow: 3, p: 2, height: '100%' }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                                    {service.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {service.description}
                                </Typography>

                                <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
                                    Key Features:
                                </Typography>
                                <List dense>
                                    {service.features.map((feature, idx) => (
                                        <ListItem key={idx} disableGutters>
                                            <ListItemIcon>
                                                <CheckCircleOutline color="primary" />
                                            </ListItemIcon>
                                            <ListItemText primary={feature} />
                                        </ListItem>
                                    ))}
                                </List>

                                {/* Testimonial Section */}
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 2, fontStyle: 'italic' }}>
                                    {service.testimonial}
                                </Typography>

                                {/* Call to Action Button */}
                                <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                                    {service.cta}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* FAQ Section */}
            <Box sx={{ mt: 8 }}>
                <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Frequently Asked Questions
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" paragraph>
                    Have questions about our services? We’ve got answers.
                </Typography>
                {/* Example FAQ Content */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>What is Quralio’s primary service?</Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                        Our primary service is providing comprehensive solutions for recycling and waste management tailored to modern needs.
                    </Typography>

                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>How can I get started with a service?</Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                        Each service has a "Learn More" or "Get Started" button. Simply click to explore or begin.
                    </Typography>
                </Box>
            </Box>

            {/* Contact Section */}
            <Box sx={{ mt: 8, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Get in Touch
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    For inquiries or to learn more, contact us at <a href="mailto:info@quralio.com">info@quralio.com</a> or call us at +123-456-7890.
                </Typography>
            </Box>
        </Container>
    );
};

export default ServicePage;
