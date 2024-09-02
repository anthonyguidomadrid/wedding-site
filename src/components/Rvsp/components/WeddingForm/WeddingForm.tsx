import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
} from '@mui/material';
import React, { useState } from 'react';

export const WeddingForm = () => {
  const [formData, setFormData] = useState({
    attending: '',
    email: '',
    name: '',
    guest: '',
    phoneNumber: '',
    whatsapp: false,
    childrenCount: 0,
    dietaryRequirements: '',
    playlistSongs: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = e => {
    setFormData(prevData => ({
      ...prevData,
      whatsapp: e.target.checked,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="attending-label" sx={{ color: 'black' }}>
          Are you attending?
        </InputLabel>
        <Select
          labelId="attending-label"
          name="attending"
          value={formData.attending}
          onChange={handleChange}
          label="Are you attending?"
          sx={{ color: 'black' }}
        >
          <MenuItem value="yes_dinner_cocktail">Yes to dinner and cocktail</MenuItem>
          <MenuItem value="yes_dinner_only">Yes only to dinner</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        InputLabelProps={{
          style: { color: 'black' }, // Change the label color to black
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        InputLabelProps={{
          style: { color: 'black' }, // Change the label color to black
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Guest name (optional)"
        name="guest"
        value={formData.guest}
        onChange={handleChange}
        InputLabelProps={{
          style: { color: 'black' }, // Change the label color to black
        }}
      />

      <FormGroup>
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: 'black' }, // Change the label color to black
          }}
        />
      </FormGroup>

      <TextField
        fullWidth
        margin="normal"
        label="How many children?"
        name="childrenCount"
        type="number"
        value={formData.childrenCount}
        onChange={handleChange}
        InputLabelProps={{
          style: { color: 'black' }, // Change the label color to black
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Dietary Requirements"
        name="dietaryRequirements"
        value={formData.dietaryRequirements}
        onChange={handleChange}
        multiline
        rows={2}
        InputLabelProps={{
          style: { color: 'black' }, // Change the label color to black
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Songs for the Playlist"
        name="playlistSongs"
        value={formData.playlistSongs}
        onChange={handleChange}
        multiline
        rows={2}
        InputLabelProps={{
          style: { color: 'black' }, // Change the label color to black
        }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};
