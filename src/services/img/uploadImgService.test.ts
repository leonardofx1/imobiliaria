import { beforeEach, describe, expect, test, vi } from "vitest";
import { UploadImgService } from "./uploadImgService.js";

import fs from "fs";
import path from "path";

describe("image upload", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  test("must validate the correct image types", () => {
    const upload = new UploadImgService();
    expect(upload.validateImageFormat("image/jpeg")).toBeTruthy();
    expect(upload.validateImageFormat("image/png")).toBeTruthy();
    expect(upload.validateImageFormat("image/webp")).toBeTruthy();
  });

  test("should create directory if it does not exist", () => {
    const upload = new UploadImgService();
    const mkdirSpy = vi.spyOn(fs, "mkdirSync").mockReturnValue(undefined);
    const existsSyncMock = vi.spyOn(fs, "existsSync").mockReturnValue(false);
    const res = upload.createDirectory("image");
    const dir = path.join(process.cwd(),'uploads')
    const expectedDir = path.join(dir,'image')
    expect(res).toEqual( expectedDir )

    expect(fs.existsSync).toHaveBeenCalledOnce()
    expect(fs.existsSync).toHaveBeenCalledWith(dir)
    
    expect(fs.mkdirSync).toHaveBeenCalledOnce()
 
  });
});
