import { FormControl, TextField, Button } from "@material-ui/core";

function AddNote () {
    return (
      <form>
        <FormControl fullWidth>
          <TextField label="Title" variant="outlined" />
        </FormControl>
        <FormControl fullWidth>
          <TextField label="Text" multiline rows={4} variant="outline" />
        </FormControl>
        <div>
          <Button type="button" color="secondary">
            Cancel
          </Button>
          <Button type="button" color="primary">
            Submit
          </Button>
        </div>

      </form>
    );
  }
  
  export default AddNote;
  