import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import offercard1 from "../Assets/offer-card1.png";
import offercard2 from "../Assets/offer-card2.png";
import offercard3 from "../Assets/offer-card-3.png";
import offercard4 from "../Assets/offer-card4.png";
import offercard5 from "../Assets/offer-card-5.png";
import offercard6 from "../Assets/offer-card6.png";

export default function InteractiveCard() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p style={{ fontSize: "35px" }}>Services we offer ?</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0fr 0fr 1fr",
          gap: "20px",
        }}
      >
        {/* Card 1 */}
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: 320,
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <AspectRatio ratio="1" sx={{ width: 200 }}>
            <img src={offercard1} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg" id="card-description">
              Online Teaching
            </Typography>
            <Typography
              level="body-sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                With online learning programs, parents can teach their kids
                anytime and anywhere.
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              Book Free Trial Class
            </Chip>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: 320,
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <AspectRatio ratio="1" sx={{ width: 200 }}>
            <img src={offercard2} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg" id="card-description">
              Live Classes
            </Typography>
            <Typography
              level="body-sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                Although live class ideas are already prevalent and established
                education business.
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              Book Free Trial Class
            </Chip>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: 320,
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <AspectRatio ratio="1" sx={{ width: 200 }}>
            <img src={offercard3} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg" id="card-description">
              Trained Teachers
            </Typography>
            <Typography
              level="body-sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                Teaching is a passion and experts want to share their expertise
                outside of the institutional sphere.
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              Book Free Trial Class
            </Chip>
          </CardContent>
        </Card>
        {/* Card 4 */}

        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: 320,
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <AspectRatio ratio="1" sx={{ width: 200 }}>
            <img src={offercard4} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg" id="card-description">
              Visual Concepts
            </Typography>
            <Typography
              level="body-sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                Learning by watching videos is better than reading long pages
                and bulky books.
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              Book Free Trial Class
            </Chip>
          </CardContent>
        </Card>
        {/* Card 5 */}
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: 320,
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <AspectRatio ratio="1" sx={{ width: 200 }}>
            <img src={offercard5} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg" id="card-description">
              Gamified Course
            </Typography>
            <Typography
              level="body-sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                Gamification immerses the students into the subject matter.
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              Book Free Trial Class
            </Chip>
          </CardContent>
        </Card>

        {/* Card 6 */}
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: 320,
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <AspectRatio ratio="1" sx={{ width: 200 }}>
            <img src={offercard5} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg" id="card-description">
              Trained Teachers
            </Typography>
            <Typography
              level="body-sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                Teaching is a passion and experts want to share their expertise
                outside of the institutional sphere.
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              Book Free Trial Class
            </Chip>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
