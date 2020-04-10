/** @jsx jsx */
import React from 'react';

import { Text } from 'theme-ui';

export default [
  [
    'Forms',
    'Forms with labels and error state.',
    '#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEspCBnADwF5hhCBzSqAJQgHdS0ADvEIBmQgF9xeIsRIoI+AC5oK+GBmmzZSADJoARjAA22AKKKAFupgBXALaEAglCgYYNGkgD0ewyYJaxEgAkvgCNorY3qHhkQHaXvJKKmoa8UFJyqrqmoG6BsZmltb2Ti5uHt6+henaMRGEsABmaDZGigBqaEY2MAy4IAAiMC1tioQAKjB0igNRXvVxMkGJClmpuRlrKTm1QdUm5lZupc6u7p4+Bf7LdWENAG6YFGhK-SCqsYOvrOpz0fcloESFMZrRGMxCHZhAAGCTiQhPSivRTvGh2bpGb74X4YOZ7WSmDAYCAYKEXNC-NgQdyEY4wAneUFAhKZHZpGTechUaTedBYaQgAA0IGKdncCAA2iAALJoADW6mGo3aIAAuiKeFRLDQpSIAEwwoUAdgAbAAONXiIA',
    `<Card>
    <Grid sx={{ gridRowGap: 3 }}>
      <Container>
        <Label>Ethereum Address</Label>
        <Input></Input>
      </Container>
      <Container>
        <Label>Ethereum Address</Label>
        <Input defaultValue="Default Text"></Input>
      </Container>
      <Container>
        <Label>Ethereum Address</Label>
        <Input variant="inputDanger"></Input>
        <Text sx={{ m: 0 }} variant="smallDanger">
          Error message goes here
        </Text>
      </Container>
    </Grid>
  </Card>
  `,
  ],
  [
    'Textareas',
    'Textareas with labels and error state.',
    '#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEscDjjUJ8AXNC-GDPI2ugGTQCMYAG2wAJCAHdCUCIQCeEAK6EAZjGEB+JAHo+gkTW4kAKjAAezDDDTYdpi5muduOlA2at2z2vSYs2HIYuesJiktKyCspqmjohBlwu9pbW0jAqaIpCjABqaEKKMAC8uCAAIumZ2YTJpbbayY42QSTabn6egYkk7R4B3sECoeJSMvJKqupCWrpDCUYm5ilohABumBRoTCUgjEtNZVsA5ux1dvtWzd10yYQAzmZFwMCEALbwhAAMhAC+P2sbLaMHZ3V75ISHfAnDB1FrcACiGAwEAwbxgdzuaBOhCOEHRhAAFuwYHDWskBq1ev4vIYdOQqJxXJhqPgQAAaXZE17ohAAbRAAFk0ABrdgVDJZRggAC6HIkVEYBLufIAzAAmT5sgDsADYABzSn5AA',
    `<Card>
    <Grid>
      <Container>
        <Label>How do you feel?</Label>
        <Textarea></Textarea>
      </Container>
      <Container>
        <Label>How do you feel?</Label>
        <Textarea defaultValue="Default Text"></Textarea>
      </Container>
      <Container>
        <Label>How do you feel?</Label>
        <Textarea variant="textareaDanger"></Textarea>
        <Text sx={{ m: 0 }} variant="smallDanger">
          Error message goes here
        </Text>
      </Container>
    </Grid>
  </Card>  
  `,
  ],
  [
    'Select Dropdown',
    'Select dropdown with labels.',
    '#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEscDjjUJ8AXNC-GDPI2ugGTQCMYAG2wBRRgAt2MAK4BbQgEEoUDDADO6pAHo+gkTW4kAysJhhGhWADM0MoYwBqaITJgBeXCAASwoRC9OI1okCAAHRgoGbF8hfx1wyOjDYNCIqPxsAEl1QgpLORgE9OSuVMSM7ABNCBkAcjVCfwgAa1YAc0JrCAwAfmKkzJSQ7VMhc0YgkZQGZlZ2KboZphY2DmHeAWExSWl5JRU1TR09bY2TMwsrGFt7Jxc3Tx8-AJBFozTBmJeByvO6CrRHJ5ApFbSAoZlD4Q6q1BowJoQVodLo9frgkqQ1KjS6TYY6ZZzNZTHTkKicAmYaj4EAAGhAu0K6gQAG0QABZNAtdgAERudgcIAAuvSAO5USTM+AsgDMACYAAy0gDsADYABxCgC+QA',
    `<Card>
    <Grid>
      <Container>
        <Label>Ethereum Address</Label>
        <Select defaultValue="Hello">
          <option>Hello</option>
          <option>Is it me</option>
          <option>You're looking for?</option>
        </Select>
      </Container>
      <Container>
        <Label>Ethereum Address</Label>
        <Select defaultValue="Hello">
          <option>Hello</option>
          <option>Is it me</option>
          <option>You're looking for?</option>
        </Select>
      </Container>
    </Grid>
  </Card>  
  `,
  ],
  [
    'Sliders',
    'Sliders with labels and error state.',
    '#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEspCBnADwF5hhCBzSqAJQgHdS0ADvEIAWQgF9xeIsRIoI+AC5oK+GBmmzZSADJoARjAA22AMpGq6wkYPGkAej2GTBLcSTnLGh59gbX2vbySipq-jLuwcqq6ppuurYmvlZoYIoUAG4wDk7GcVoeFn6EGZgUaEoMuCA0ReoAgmmZMNXYPnXhBUEK0WFxDuRU0g7oWNIgADQgigAWMAC2MDQIANogALJoANbqACIwAGZoAK5GiiAAulM8VLPL8CsAzABMAAwTAOwAbAAcF+JAA',
    `<Card>
    <Grid sx={{ gridRowGap: 4 }}>
      <Container>
        <Label>Slider label</Label>
        <Slider></Slider>
      </Container>
      <Container>
        <Label>Slider active</Label>
        <Slider variant="sliderActive"></Slider>
      </Container>
    </Grid>
  </Card>
  `,
  ],
  [
    'Privacy Policy Thing',
    'Usually uses position:fixed, \n Remember to integrate the Link component properly, \n The X should be an icon (TODO).',
    '#?code=N4Igxg9gJgpiBcIAEKkB4BiAbGAPAOgHaqoDOuAvMMESSQA4SkCWALsxIfEgOQCGAI1IQsAV1YweAGlp0UAiK1YQAttwAMM4nKQB3ZlFYALbjwCM69QFJpsuQCtRpdgDMAngGFOEwq1NgYXxgAJ1ttOUYWdk5TF2ZcGCgwnSR6bgBmO1QAX2ysgD4slEwcAnC6cioacrkANz5g5j5fU2c3HFIAOmCIUUJYKA8GpK0UlHo3DNGxvixmAHNCAEkJFVJ-QIlQ6ZSFXABlIz4oCF1TdSQzelwkACZrpGD5gT4ACgBOTSRPqW+v9U66gAbABKZJjBTBWDBABKx2YTm4twALEUcnkakhCpjigAVPCsNEkSrUIl0FTBJE7Mb1RrNPy8CS4VidZiEejifHMnhklC5MnYsZIABCbiQTjZ8yQxmYpD0MCEbBgSDcvSQfHmwRgyuUSF6wWAPF4GN5qDQABk2QBrU3EyiknE0hpNFq8NodTp8cFCkhQWX0LB8Sa8NlzQiSak+pBgUTBYSU3iMNlbHmOuT8tOoQVR1KNepgMWMOYF23oAD0lsIVuxZLQZa5rHyZRSteF4mUhFNJOA0dj8dMSaCoSQGaFtJdrAo+HAOAa06JAtNJTwpe7pZQjmczHcXiCrp4ASH3p9swWy1W614h5TpdHY2zQqXZeweAfOlrZbbSk4b+Kz9Kb51i+uD5CAUggMYMAqDApAIAA2iAACyfBWiEAAiMAuHwohYKwIAALrgfohhGLB8BwektyaAA7ECAAc+HZEAA',
    `<Flex
sx={{
  position: "absolute",
  bottom: 0,
  width: "100%",
  justifyContent: "center",
  position: "relative",
  p: 3
}}
>
<Card
  sx={{
    boxShadow: "0 1px 2px rgba(90, 90, 90, 0.06)",
    borderRadius: 'round'
  }}
>
  <Flex
    sx={{ alignItems: "center" }}
  >
  <Text
    sx={{
      mr: 2,
      variant: "text.inputText"
    }}
  >
    By using this website you agree to our{" "}
    <Link
      sx={{
        variant: "styles.a",
        display: "inline",
        cursor: "pointer"
      }}
    >
      privacy policy
    </Link>
  </Text>
  x
  <Button sx={{ cursor: "pointer" }} variant="clear">
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center"
      }}
    ></Flex>
  </Button>
  </Flex>
</Card>
</Flex>
`,
  ],
  [
    'Inputs and Buttons',
    'Just actionable elements',
    '#?code=N4Igxg9gJgpiBcIA6A7ABBtAeAQhAHmgM74C8wwaAbgIYBOAljSgC7xpIhEsCeANjCIA6OhACuKWFADC9KJzQBfRQD5UmTFgASMGlAYoA5ioCSKAA5iWRNMyhocVlhBREsAeh16Dx9RuwAIgxUDLB0Kh5BIWFq6P5YADI0AEYwfCoAgmgAKjD4LGgZdLoeSanpfhpYufn0uhHuNSx1NLH+2ADijFBt7dhlaSoDfGgAZhB0aGaW1qUpg5Xx01YNyyy97VhraLCjNGJ8LABqNHxiMKScATB7BwUnZzCcqxYri1VRoTDhkcFf4e9NMMVAAxBhpewAdwYLAAFmg+PMRnYdjd9odqKdznNyht4mCIYCNIjypcQABRAC2NAYfE4RMwKBolIunBg1Np9LifVRt0OD3OZN26IKtEeYwmaHZNJGo3BfHkyG5-nceKqwIConMUAgkPQAGU0jAwCwcQtlVVDQITbyRQLWSAdHw+BBngyMFgIOYWAwXConS6PF6fX73dhg76UP6GEHvZG1fEI36cDAYOZYyGo2HPXHkxAvRn4wyPFbjetAR4uqEE1hPjFftFvjXgQBZGAoMQOJwuM0VC3YNsdxwsZxRjyDsTD0fNpGmSDoKcuNDQuFofVHDq9msmeeLrP9j1EKiGMP4Sl8Vxk2Ej8zwdzuSGPoSQgDMQgmhncACYAAx-9xHieSo8hg0JQHCZJfgALFyIFoLCMAMIY16QTBwEgSEMCQngZCcD+aD4dBaDQbBIFys6ZIoC4TzoTy3CiAA1g6YBiHQxSsNIEAunQpF0SwjEwAAtGBEGcF+vF9PREBMYJfAGMaNDmGSogSIqYZSTJckoDAABWEAGMp4iSBJ7RgIiRBEGSoy6HC3xjDZCF0IJMA8DRDIJlU5g0KuUBki2ACMaD+V+RBQYJAAcQX+RFUVoJF-mBeFglQXFgkJalCURWl0XhQAXs8HheXCHmaGADB0GZMBoGAuEgMFChgDwZL1SAaB0GSL4Fe4ZUVQIJUeIBNbuDuLh7jOuIAAqMNSdA8F2I49u4wIVmNe4eGNFbAgA8lYWlVWtS2zit3boLQjDMCwZLiCwe3PAdG39rWfz1u4dZNpts7SAhYAMckBCCFuFZfcav0EA0wM-X9+A1hDoOEMKdywzAvnAPx5yqB4sNQ+NgwAEreBA82jm4h24hW+P6BADQU76NY04TCOHEjKNozAGPuPTeLrWDlQgAANCAtkskQCAANogC2NBMXQ1x8iwIAALoCyJsIi-Aosvr+fMAOwAGzhQrihAA',
    `
  <Card>
    <Heading>Inputs and Buttons</Heading>
    <Divider></Divider>
    <Label>A Text Area</Label>
    <Textarea></Textarea>
    <Grid>
      <Label>Label for Inputs</Label>
      <Input></Input>
      <Input defaultValue="Default Value"></Input>
      <Divider></Divider>
      <Label>Field with label and default value</Label>
      <Field
        label="Email"
        name="email"
        defaultValue="default value for email field"
      />
      <Label>Dropdown Select</Label>
      <Select defaultValue="Hello">
        <option>Hello</option>
        <option>Hi</option>
        <option>Beep</option>
        <option>Boop</option>
      </Select>
    </Grid>
    <Divider></Divider>
    <Label>Menu Button</Label>
    <MenuButton></MenuButton>
    <Label>Icon Button with SVG</Label>
    <IconButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-eye"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </IconButton>
    <Label>Primary Button</Label>
    <Button>Button</Button>
    <Label>Outline Button</Label>
    <Button variant="outline">Button</Button>
    <Divider></Divider>
    <Label>Checkboxes</Label>
    <Checkbox></Checkbox>
    <Checkbox defaultChecked={true}></Checkbox>
    <Label>Radio Buttons</Label>
    <Radio></Radio>
    <Radio defaultChecked={true}></Radio>
  </Card>
 `,
  ],
  [
    'Everything',
    'All Components',
    '#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcA+AHXQAIKkBxQ3KCgWwF5SQAmdigZwA8WwYBQDm9KACUIAdxrYADvAocKAX1VlKVagCEIfXgKEUAbtnrYsS9j0wBPADYweAOkIQArulhQU5qNzqmtraSAASMNhQ+CLEADLYdp6YPBSWjACy5gDWHvJIAPQRUTHBIdQAIrgmDETEhVU1sCTk5dQAYk58ZW1IAHLYJnH42cxsnOzEYRBMMIUDQyM95f2Dw+ijrOxcIMQ6DhAi82tLrW3UC+ub4zvEAIIARsnHixvLIauv19uTCw4jPBeV3e1AKnRg3TOHzuTkImHusMwSh4MxgaURzGcPGwIjmBRhRHhUNCxWi6FiABUABa4VK0tIUKmRMlHIrM0rEqhICkQ+EAZVRFB02B4uDAFB5fEwhUlRK0H2BAEkAORMBlXQrAznUBIPGAOe4UBzYPUOCgAMwghAomBpqUG2BwhHgmpN+pBSDuZidvEIYEE7CpmEwigKBWkEZc5twDgcTA8hEIiRckCYBQ4AAYM+ms+wNIUvY7zB7hVBccQAOq4W0M0u4wp1mAejJYnFNgWzTE8bG40QQZyMoh4lvdtvLBv6cd6Az8QTCMwWKwUGz2JyudxeHx+QgBEBqDTa8Ls8nERXoeQeFJpbxCy+YDCAtklE+Hxq1EgNarvj26913CW8hQdyEJErqmh6srmJE9QFJBIHYB6dAMCCXK-gaaEWlaFBnheKRge62pcjhl4wcRcrnNQZEULA5rYB4DiYAAatgDgeDA4wVDAtH0ZgFDMaxMCTIUZEoZUX7NDBb4SYROpuga7S4PqjDSNWVJGnJ16MDRdEMaYLFsfhBoyUgClKTJVDGqa4wAKJMHgDjsOZFDoNgszjDAdkxo58rnNpPH8Wx4x+bpZgCZh1oefZFqKQ4u4yQUolIGhxAVO48hQDIlB8vqMBgNKBTJcZ2VOHl1FcTpTH6ex7ARLGECTE5SAQPImC4BgUz6gchTNa17WNT1bXoFMuDdS1g2iVyA3tToMAwPkBRTUN-VjdNEDNaNvVLT5HwFMVuXkSsBRIVAHpSXUn5NHUh7JS26AeLewYYIZzYwHdOh3u1hS3R472PVtvTJYqkCUL996UCpNZ8oxNDPYeQMYKDfXbaEPAmCITl8EwDjoDw4xBiG8BhhG0guNIADMLhWiIOZZgUqPoyATkqVAto3AALN5FFUEyuAiEG7Oc1zNQwNI07jBmFASxwbPKBzjPIyE0axuM6AYIJ8tc7wmDuNk1XgAmIFYGgByEILFG2DrMAALTM6zPwa1zFsQLrVv-AQYAKOMG7eGb5xOy7bswAAVhA+Be54PsOxRYDGt24zmpEtpEBaidMoQVswHY6syRN1DyI6alQOMGQAIwUCXHA8GzVsABzlyXtf1xQdcl2XNdWzL7et83Vut7XvcNzXABeQkFPntq50gYC4H6TgUGAAjsBX3BgHY4zL3uhDjGTo-T7PTbGXTaMegU8PoIj-0rMlAAK9B2YQdgPWDsPI0gF97B96ANp-P5ycQADyl5A5PyegVP+h4L56UXJgcYyRA6TAvt-P6p1xLnQKGdFor9kooCZGAbITw+DOBfr0HBuV8GTkKKQvBBCPRUPIQYYKmA6EwCLsAbWbF8wFDoTQ66f8JAlAgCAnGxCVj8OiBAGCYi2oeikYIxhzDWHsJgJw2R44CjTinPoQwc4oG4EsEiZcIBbCOGcG4COW5-CBAPK-UkpQ+T-GaPaG8cQIBRCII+WxL4sF-z5PIfABBCAiI+L4-xaCQnoACb-cCFQMCXiCaEGJd14QNFiQdD4GDJKoMwQDHxDiiDxK5PY78hQinSW8eBW+hwQLdiFOYSWABSAp1BKliCxDBFp1SeBRPdB0rEtTrQAFYMyNLAeBQ8vSal2SMCXVQekBKCDLgUZQnCJldN4RU9wrSanCmtCXLMIzCqv1WcwbA0zZmhUCsAFQSyOArM2Z0tRGjiRvy0bOYwC49FLhXCY9c5iWHbl3PuWhliFbaKEE5KZVYWZUiUBwAZAA2AANE5fOUAWSwuRaCqgTwdxECkR4HgSg2aYs1gQvkVIogyGsCACWEsa7yAMIQEQDxsAAAoMyIslpyjlksXAVwGQASl9iEdQ2pEq2T1IwHgfo8bBnkISomkYkiXg8HqFMMwCgeUlUdPoKAoAAH1rISAAFomGNRkbgCVjKymIBKlhPhTC1EEfgBkHsdwyl5CfAFjzJxnEKMdTQlCMA4HwFddAIBEUgCTrMHgCAADaIAsi60IJxbiDEQAAF1I22ypLG+AcayaZkRQAdnhTXDNqggA',
    `<Container>
    <Grid m="2" sx={{ gridRowGap: 2 }}>
      <Card>
        <Heading>Layouts and Markup</Heading>
        <Divider></Divider>
        <Flex>
          <NavLink m="2">Home</NavLink>
          <NavLink m="2">Blog</NavLink>
          <NavLink m="2">About</NavLink>
          <NavLink m="2">Navlinks</NavLink>
        </Flex>
        <Alert>Alert: some alert message</Alert>
        <Heading>This is a heading</Heading>
        <Text>Some Basic Text</Text>
        <Link>I'm a Link</Link>
        <Label>A label for this avatar:</Label>
        <Avatar src={'http://www.fillmurray.com/200/200'}></Avatar>
        <Badge>With a Badge</Badge>
        <Message>Some message goes here</Message>
      </Card>
      <Card>
        <Heading>Inputs and Buttons</Heading>
        <Divider></Divider>
        <Label>A Text Area</Label>
        <Textarea></Textarea>
        <Grid>
          <Label>Label for Inputs</Label>
          <Input></Input>
          <Input defaultValue="Default Value"></Input>
          <Divider></Divider>
          <Label>Field with label and default value</Label>
          <Field
            label="Email"
            name="email"
            defaultValue="default value for email field"
          />
          <Label>Dropdown Select</Label>
          <Select defaultValue="Hello">
            <option>Hello</option>
            <option>Hi</option>
            <option>Beep</option>
            <option>Boop</option>
          </Select>
        </Grid>
        <Divider></Divider>
        <Label>Menu Button</Label>
        <MenuButton></MenuButton>
        <Label>Icon Button with SVG</Label>
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </IconButton>
        <Label>Primary Button</Label>
        <Button>Button</Button>
        <Label>Outline Button</Label>
        <Button variant="outline">Button</Button>
        <Divider></Divider>
        <Label>Checkboxes</Label>
        <Checkbox></Checkbox>
        <Checkbox defaultChecked={true}></Checkbox>
        <Label>Radio Buttons</Label>
        <Radio></Radio>
        <Radio defaultChecked={true}></Radio>
      </Card>
      <Card>
        <Heading>Sliders and Loaders</Heading>
        <Label>Spinner</Label>
        <Spinner></Spinner>
        <Label>Donut</Label>
        <Donut></Donut>
        <Divider></Divider>
        <Label>Slider</Label>
        <Slider></Slider>
        <Label>Progress Bar 0%</Label>
        <Progress></Progress>
        <Label>Progress Bar 50%</Label>
        <Progress max={1} value={1 / 2}></Progress>
        <Label>Progress Bar 100%</Label>
        <Progress max={1} value={2 / 2}></Progress>
      </Card>
      <Card>
        <Card
          sx={{
            maxWidth: 256,
            padding: 2,
            borderRadius: 'small',
            boxShadow: 'floater',
          }}
        >
          <Embed src="https://www.youtube.com/embed/GNCd_ERZvZM" />
          <Text>Embedded video in a card</Text>
        </Card>
      </Card>
    </Grid>
  </Container>`,
  ],
];
