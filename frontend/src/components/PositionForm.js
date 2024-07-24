import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { format } from "date-fns";
import ReactQuill from "react-quill";
import {
  getStrategyData,
  getSLPercentageData,
} from "../utils/helpers/positionHelpers";
import "react-quill/dist/quill.snow.css"; // Import styles for ReactQuill

const Container = styled.div`
  margin: 68px 180px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 32px 50px 50px;
  border-radius: 5px;
`;

const LinkContainer = styled.div`
  padding: 76px 0px 0px 0px;
`;

const PageHeading = styled.h1`
  color: rgb(28, 77, 160);
  margin-top: 0px;
  margin-bottom: 44px;
`;

const Form = styled.form`
  display: grid;
  gap: 20px 60px;
  grid-template-columns: 1fr 1fr;
`;
const FormSection = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormFieldSubmit = styled.div`
  margin-top: 40px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;
const ImageInner = styled.div`
  flex-basis: 100px;
  margin-top: ;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 56px;
  object-fit: cover;
  border-radius: 5px;
`;

const DeleteImageButton = styled.button`
  background-color: #ec4e4e;
  color: white;
  border: none;
  padding: 1px 5px;
  border-radius: 2px;
  cursor: pointer;
  vertical-align: top;
`;
const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 5px;
`;

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
};

const PositionForm = ({ initialValues }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [initialImages, setInitialImages] = useState([]);

  const today = format(new Date(), "yyyy-MM-dd");

  const formik = useFormik({
    initialValues: {
      stockName: "",
      stockSymbol: "",
      buyDate: today,
      sellDate: "",
      buyPrice: "",
      sellPrice: "",
      currentPrice: "",
      totalStocks: "",
      stopLoss: "",
      notes: "",
      images: [],
      isDeleted: false,
      strategy: "",
      slPercentage: "",
      ...initialValues,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          if (key === "images") {
            Array.from(values.images).forEach((file) => {
              if (file instanceof File) {
                formData.append("images", file);
              }
            });
          } else {
            formData.append(key, values[key]);
          }
        });
        formData.delete("deleteImages");
        if (imagesToDelete.length > 0) {
          const finalImgs = imagesToDelete.map((imgObj) => {
            return imgObj.url.replace("http://localhost:3041/images/", "");
          });
          formData.append("deleteImages", finalImgs);
        }
        const url = `http://localhost:3041/api/positions${id ? `/${id}` : ""}`;
        const method = id ? "put" : "post";

        await axios({
          method,
          url,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        queryClient.invalidateQueries("positions");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3041/api/positions/${id}`)
        .then((response) => {
          const images = response.data.images || [];
          setInitialImages(images);
          formik.setValues({
            ...response.data,
            images: images.map((img) => ({
              url: `http://localhost:3041/images/${img}`,
              file: null,
            })),
          });
        })
        .catch((error) => {
          console.error("Error fetching position:", error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (formik.values.buyPrice && formik.values.slPercentage) {
      const slPercentage = parseFloat(formik.values.slPercentage);
      const buyPrice = parseFloat(formik.values.buyPrice);
      if (!isNaN(slPercentage) && !isNaN(buyPrice)) {
        const stopLoss = buyPrice - (buyPrice * slPercentage) / 100;
        formik.setFieldValue("stopLoss", stopLoss.toFixed(2));
      }
    }
  }, [formik.values.buyPrice, formik.values.slPercentage]);

  const handleDeleteImage = (image) => {
    setImagesToDelete((prev) => [...prev, image]);
    formik.setFieldValue(
      "images",
      formik.values.images.filter((img) => img !== image)
    );
  };

  const handleUndoDelete = (image) => {
    setImagesToDelete((prev) => prev.filter((img) => img !== image));
    formik.setFieldValue("images", [...formik.values.images, image]);
  };

  const handleImageChange = (event) => {
    const files = event.currentTarget.files;
    const fileArray = Array.from(files);
    formik.setFieldValue("images", [...formik.values.images, ...fileArray]);
  };
  const strategyOption = () => {
    return getStrategyData().map((item) => (
      <option key={item.value} value={item.value}>
        {item.text}
      </option>
    ));
  };

  const slPercentageOption = () => {
    return getSLPercentageData().map((item) => (
      <option key={item.id} value={item.value}>
        {item.text}
      </option>
    ));
  };

  return (
    <Container>
      <PageHeading>{id ? "Edit Position" : "Add Position"}</PageHeading>
      <Form onSubmit={formik.handleSubmit}>
        <FormSection>
          {" "}
          <FormField>
            <Label htmlFor='strategy'>Select Strategy:</Label>
            <Select
              id='strategy'
              name='strategy'
              onChange={formik.handleChange}
              value={formik.values.strategy}
              required
            >
              {strategyOption()}
            </Select>
          </FormField>
          <FormField>
            <Label htmlFor='buyDate'>Buy Date:</Label>
            <Input
              id='buyDate'
              name='buyDate'
              type='date'
              onChange={formik.handleChange}
              value={formik.values.buyDate}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor='stockName'>Stock Name:</Label>
            <Input
              id='stockName'
              name='stockName'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.stockName}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
              }}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor='stockSymbol'>Stock Symbol:</Label>
            <Input
              id='stockSymbol'
              name='stockSymbol'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.stockSymbol}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
              }}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor='buyPrice'>Buy Price (Rs.):</Label>
            <Input
              id='buyPrice'
              name='buyPrice'
              type='number'
              step='0.01'
              onChange={formik.handleChange}
              value={formik.values.buyPrice}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor='slPercentage'>Select Stop/loss percentage:</Label>
            <Select
              id='slPercentage'
              name='slPercentage'
              onChange={formik.handleChange}
              value={formik.values.slPercentage}
              required
            >
              {slPercentageOption()}
            </Select>
          </FormField>
          <FormField>
            <Label htmlFor='stopLoss'>Stop Loss (Rs.):</Label>
            <Input
              id='stopLoss'
              name='stopLoss'
              type='number'
              step='0.01'
              onChange={formik.handleChange}
              value={formik.values.stopLoss}
            />
          </FormField>
          <FormField>
            <Label htmlFor='totalStocks'>Total Stocks:</Label>
            <Input
              id='totalStocks'
              name='totalStocks'
              type='number'
              onChange={formik.handleChange}
              value={formik.values.totalStocks}
            />
          </FormField>
          <FormField style={{ gridColumn: "span 2" }}>
            <Label htmlFor='notes'>Notes:</Label>
            <ReactQuill
              id='notes'
              name='notes'
              value={formik.values.notes}
              onChange={(value) => formik.setFieldValue("notes", value)}
              modules={modules}
            />
          </FormField>
        </FormSection>
        <FormSection>
          <FormField>
            <Label htmlFor='currentPrice'>Current Price (Rs.):</Label>
            <Input
              id='currentPrice'
              name='currentPrice'
              type='number'
              step='0.01'
              onChange={formik.handleChange}
              value={formik.values.currentPrice}
            />
          </FormField>
          <FormField>
            <Label htmlFor='sellPrice'>Sell Price (Rs.):</Label>
            <Input
              id='sellPrice'
              name='sellPrice'
              type='number'
              step='0.01'
              onChange={formik.handleChange}
              value={formik.values.sellPrice}
            />
          </FormField>

          <FormField>
            <Label htmlFor='sellDate'>Sell Date:</Label>
            <Input
              id='sellDate'
              name='sellDate'
              type='date'
              onChange={formik.handleChange}
              value={formik.values.sellDate}
            />
          </FormField>
          <FormField style={{ gridColumn: "span 2" }}>
            <FormField>
              <Label>Upload Images:</Label>
              <Input
                id='images'
                name='images'
                type='file'
                multiple
                onChange={handleImageChange}
              />
            </FormField>
            <ImageContainer>
              {formik.values.images.map((image, index) => (
                <ImageInner key={index}>
                  {image.url ? (
                    <ImagePreview
                      src={image.url}
                      alt={`Uploaded image ${index + 1}`}
                    />
                  ) : (
                    <ImagePreview
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded image ${index + 1}`}
                    />
                  )}
                  {imagesToDelete.includes(image) ? (
                    <DeleteImageButton
                      type='button'
                      onClick={() => handleUndoDelete(image)}
                    >
                      Undo
                    </DeleteImageButton>
                  ) : (
                    <DeleteImageButton
                      type='button'
                      onClick={() => handleDeleteImage(image)}
                    >
                      Delete
                    </DeleteImageButton>
                  )}
                </ImageInner>
              ))}
            </ImageContainer>
          </FormField>

          <FormField>
            {" "}
            <FormFieldSubmit>
              <Button type='submit'>
                {id ? "Update Position" : "Add Position"}
              </Button>{" "}
            </FormFieldSubmit>
          </FormField>
        </FormSection>
      </Form>
      <LinkContainer style={{ gridColumn: "span 2" }}>
        <Link to='/'>{` << back to Positions`}</Link>
      </LinkContainer>
    </Container>
  );
};

export default PositionForm;
