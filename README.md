# 정승한 | IDEA LAB Researcher

IDEA LAB 연구 포트폴리오 사이트입니다. AI 에이전트를 활용한 CFD 격자 연구 데모와 스터디 자료를 공개합니다.

**https://seunghanjung.github.io/**

## 구성 (2026-11-09 개편, junseokchoi-hyu.github.io 와 같은 결)

- `index.html` — 사이트 전체 (스타일·스크립트 인라인, 빌드 불필요). 글꼴은 Google Fonts 의 Noto Sans KR.
  1. 검정 헤더 (흰 IDEA LAB 로고 + Home | Demo | Study | About me, 보고 있는 섹션에 밑줄)
  2. 첫 화면: **배경 영상** `public/demos/mesh_gen_hero.mp4` (ONERA M6 위에 격자 생성 → AMR refine → 표면 Cp → 충격파, 46 s, 흰 바탕, 투명도 없이 100 %) 위에 이름·소개·버튼. 왼쪽은 흰 그라데이션으로 글자 가독성 확보. 포스터 `mesh_gen_hero_poster.jpg`
  3. 파이프라인 띠: 배경 영상의 현재 시각에 맞춰 01 Initial mesh / 02 AMR refinement / 03 Surface Cp / 04 Shock wave 가 켜짐 (`timeupdate`)
  4. 관심 분야 한 줄 (AI Engineering · CFD · Aerodynamic Design)
  5. Research 01 (남색): AMR-based CFD Remeshing Agent — 녹화 영상 `public/demos/amr-remeshing-agent.mp4` + 파란 알약 버튼 → https://seunghanjung.github.io/amr-remeshing-agent-demo/
  6. Research 02 (연회색): SALOME Meshing Agent — `public/demos/salome-meshing-agent.mp4`
  7. Study Materials: 줄 목록 6건 (`study/*.pdf`, 새 창)
  8. About me: 사진 카드 + 소속·이메일
  9. 검정 푸터
- `public/idea-lab-logo-white.png` — 한양대 마크 + IDEA LAB 흰 로고 (헤더·푸터). 이전 색 로고 `idea-lab-logo.png`, `hanyang-logo.png` 는 남겨 둠
- `public/seunghan-jung.jpg` — 프로필 사진 (900×1200)
- `index.prev.html` — 개편 전 페이지 백업 (아이보리 바탕, 사진 히어로)

## 영상 규칙

- 모든 영상은 `autoplay muted loop playsinline` + IntersectionObserver (보일 때만 재생). 브라우저는 음소거 자동재생만 허용.
- 데모 녹화 영상은 해상도가 달라 `.feature-media video` 에 인라인 `style="aspect-ratio: W / H"` 를 줌 (1884/848, 1910/898). 안 주면 위아래 검은 띠.
- 배경 영상은 `object-fit: cover; object-position: 62% 50%` 로 오른쪽 날개가 보이게 자름. 원본·고화질판은 `C:\ARM_su2_project\v2\results\mesh_gen_video\` (render_mesh_gen_video.py → blend_frames.py → encode_mesh_gen_video.sh). 사이트용은 1280×720 CRF 27.

## 로컬에서 보기

`index.html` 을 브라우저로 바로 열면 됩니다. (Claude Code 에서는 `.claude/launch.json` 의 `homepage-static`, 8766 포트)

## 배포

저장소 이름이 `seunghanJung.github.io` 라 GitHub Pages **user site** 로 동작합니다. Source 는 `main` 의 `/ (root)`, 루트의 `.nojekyll` 이 Jekyll 전처리를 건너뜁니다.

```bash
git add -A; if ($?) { git commit -m "메시지" }; if ($?) { git push }
```

push 후 20~30 초면 반영됩니다. 이전 사본이 남아 있으면 Ctrl+Shift+R.

## 색상

| 변수 | 값 | 용도 |
| --- | --- | --- |
| `--black` | `#0b0d10` | 헤더·푸터 |
| `--navy` | `#0f213d` | Research 01 블록, 사진 캡션 |
| `--blue` | `#0f52ba` | 포인트 (버튼, 섹션 번호, 링크) |
| `--mist` / `--line` | `#f3f5f8` / `#e1e6ec` | 연회색 블록과 구분선 |
| `--gold` | `#f0c14b` | 사진 캡션 포인트 선 |

## 편집 시 유의할 점

- 본문 16 px 기준 (지도 피드백: 글자 작게 하지 말 것).
- 긴 한국어 문단에는 `word-break: keep-all` + `text-wrap: pretty`.
- 스터디 목록에는 다운로드 버튼이 없고 `PDF ↗` 하나만.
- 파이프라인 띠의 `data-from/data-to` 는 배경 영상의 장면 시각(초)과 맞춰야 함. 영상을 바꾸면 같이 고칠 것.

## 참고

이 저장소에는 별개의 Vite/Cloudflare Workers 실험 코드(`app/`, `worker/`, `db/`)가 함께 있습니다. 공개되는 사이트는 루트의 `index.html` 정적 페이지입니다.
