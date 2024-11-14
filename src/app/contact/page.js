'use client';

import React from 'react';
import { Container, Typography, Grid, Box, TextField, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
    return (
        <Container sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
                We’d love to hear from you! Fill out the form below, or use the provided contact details to get in touch with us.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {/* Contact Form */}
                <Grid item xs={12} md={5}>
                    <Card sx={{ p: 3, boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Send Us a Message
                            </Typography>
                            <Box component="form" sx={{ mt: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    margin="normal"
                                    type="email"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    required
                                />
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 2,
                                        borderRadius: '50px',
                                        backgroundColor: '#2c3e50', // Blue-black or dark gray color
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#34495e', // Lighter shade for hover
                                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Light-up effect
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>
                                

                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Contact Details */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ p: 3, boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Contact Information
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocationOn color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="6kilo FBE, Addis Ababa, Ethiopia"
                                        secondary="Our currect team location"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Phone color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="+251994445412"
                                        secondary="Available 24hr"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Email color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="contact.quralio@gmail.com"
                                        secondary="We reply within 24 hours"
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Optional Map Section */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Find Us Here
                </Typography>
                <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, mt: 2 }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31523.902433138894!2d38.7495060630784!3d9.019186961854173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85fbf17bf1d9%3A0x891a0ea455229e14!2sAddis%20Ababa%20University%20FBE%20Campas%20Eshetu%20Chole%20Hall!5e0!3m2!1sen!2set!4v1731585947270!5m2!1sen!2set"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Box>

            </Box>
        </Container>
    );
};

export default Contact;
