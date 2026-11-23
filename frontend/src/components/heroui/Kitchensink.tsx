"use client";

import {
  Accordion,
  Alert,
  Avatar,
  Button,
  Checkbox,
  Chip,
  Description,
  Input,
  Label,
  ProgressBar,
  Switch,
  Tabs,
  TextArea,
  TextField,
} from "@heroui/react";
import { faq, news, slides } from "@/demo/content";
import { NewsCard } from "./NewsCard";
import { PhotoCarousel } from "./PhotoCarousel";

export function Kitchensink() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10">
      <div>
        <h1 className="text-4xl font-black">HeroUI kitchen sink</h1>
        <p className="text-muted">Change the colour and mode from the header: everything below follows.</p>
      </div>

      <Demo title="Buttons">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger-soft">Danger soft</Button>
          <Button className="rounded-full">Rounded</Button>
          <Button isPending>Loading</Button>
          <Button isDisabled>Disabled</Button>
        </div>
      </Demo>

      <Demo title="Chips">
        <div className="flex flex-wrap gap-2">
          <Chip color="accent" variant="primary">Accent</Chip>
          <Chip color="warning" variant="soft">Kindergarten</Chip>
          <Chip variant="soft" className="bg-purple-500/15 text-purple-700 dark:text-purple-300">Middle School</Chip>
          <Chip variant="soft" className="bg-pink-500/15 text-pink-700 dark:text-pink-300">Events</Chip>
          <Chip color="success" variant="soft">Published</Chip>
          <Chip color="danger" variant="soft">Urgent</Chip>
        </div>
      </Demo>

      <Demo title="Alerts">
        <div className="flex flex-col gap-3">
          <Alert status="accent">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>School closed on 8 December</Alert.Title>
              <Alert.Description>National holiday — lessons resume on 9 December.</Alert.Description>
            </Alert.Content>
          </Alert>
          <Alert status="warning">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Enrolment documents due by 31 January.</Alert.Title>
            </Alert.Content>
          </Alert>
          <Alert status="success">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Your Open Day booking is confirmed.</Alert.Title>
            </Alert.Content>
          </Alert>
        </div>
      </Demo>

      <Demo title="Form">
        <div className="grid gap-4 md:grid-cols-2">
          <TextField isRequired name="name">
            <Label>Parent name</Label>
            <Input placeholder="Maria Rossi" />
          </TextField>
          <TextField name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="maria@example.com" />
            <Description>We will only use it to reply.</Description>
          </TextField>
          <TextField name="message" className="md:col-span-2">
            <Label>Message</Label>
            <TextArea placeholder="I'd like to book a visit…" />
          </TextField>
          <Checkbox defaultSelected name="privacy">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              I accept the privacy policy
            </Checkbox.Content>
          </Checkbox>
          <Switch defaultSelected>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Subscribe to the newsletter
            </Switch.Content>
          </Switch>
        </div>
      </Demo>

      <Demo title="Tabs">
        <Tabs>
          <Tabs.ListContainer>
            <Tabs.List aria-label="School levels">
              <Tabs.Tab id="kinder">
                Kindergarten
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="middle">
                Middle School
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="after">
                After school
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="kinder">Play-based learning, music and outdoor time.</Tabs.Panel>
          <Tabs.Panel className="pt-4" id="middle">Small classes, labs and languages.</Tabs.Panel>
          <Tabs.Panel className="pt-4" id="after">Sports, choir and homework club until 18:00.</Tabs.Panel>
        </Tabs>
      </Demo>

      <Demo title="Accordion (FAQ)">
        <Accordion className="w-full" defaultExpandedKeys={["0"]}>
          {faq.map((f, i) => (
            <Accordion.Item key={f.q} id={String(i)}>
              <Accordion.Heading>
                <Accordion.Trigger className="font-semibold">
                  {f.q}
                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>{f.a}</Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Demo>

      <Demo title="Avatars & progress">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            {["Anna Bianchi", "Luca Rossi", "Giulia Verdi", "Marco Neri"].map((n) => (
              <Avatar key={n} color="accent">
                <Avatar.Fallback>
                  {n
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </Avatar.Fallback>
              </Avatar>
            ))}
          </div>
          <ProgressBar value={68} className="max-w-md">
            <Label>School trip fundraising</Label>
            <ProgressBar.Output />
            <ProgressBar.Track>
              <ProgressBar.Fill />
            </ProgressBar.Track>
          </ProgressBar>
        </div>
      </Demo>

      <Demo title="Carousel (Embla + HeroUI)">
        <PhotoCarousel slides={slides} />
      </Demo>

      <Demo title="News cards">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <NewsCard key={n.id} item={n} />
          ))}
        </div>
      </Demo>
    </div>
  );
}

function Demo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 border-b-2 border-accent/30 pb-2 text-xl font-extrabold">{title}</h2>
      {children}
    </section>
  );
}
